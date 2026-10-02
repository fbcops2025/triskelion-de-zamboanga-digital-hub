/**
 * Shared native-details navigation behavior.
 *
 * This module deliberately does not import Firebase or app content. It can be
 * loaded by the home page and generated editorial pages independently.
 *
 * Usage from a page integration:
 *   import { initHeaderNavigation } from './src/header-navigation.mjs';
 *   initHeaderNavigation({ root: document.querySelector('#site-nav') });
 *
 * The root is the navigation scope. Only details inside that root are managed;
 * unrelated details elsewhere on the page are never changed.
 */

const isElement = value => value && value.nodeType === 1;

const getOpenMenus = root => [...root.querySelectorAll('details')].filter(menu => menu.open);

const setSummaryState = menu => {
  const summary = menu.querySelector(':scope > summary');
  if (summary) summary.setAttribute('aria-expanded', String(menu.open));
};

const setAllSummaryStates = root => {
  root.querySelectorAll('details').forEach(setSummaryState);
};

/**
 * Attach exclusive, dismissible behavior to a native-details navigation.
 *
 * @param {object} options
 * @param {Document|Element} [options.documentRef=document] document-like object,
 *   useful for generated-page integration and browser tests.
 * @param {Element} options.root the nav element that owns the dropdown details.
 * @param {Element|string} [options.menuToggle] optional mobile menu button or selector.
 * @param {Element|string} [options.mobilePanel] optional mobile nav panel or selector.
 * @returns {{close: Function, destroy: Function, openMenus: Function}}
 */
export function initHeaderNavigation({
  documentRef = globalThis.document,
  root,
  menuToggle = null,
  mobilePanel = root,
} = {}) {
  if (!documentRef || !isElement(root)) {
    throw new TypeError('initHeaderNavigation requires a navigation root element');
  }

  const resolve = value => typeof value === 'string' ? documentRef.querySelector(value) : value;
  const toggle = resolve(menuToggle);
  const panel = resolve(mobilePanel);
  const details = () => [...root.querySelectorAll('details')];
  let lastMenuFocus = toggle || null;

  const syncMobileState = open => {
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    if (panel && panel !== root) panel.classList.toggle('is-open', open);
  };

  const close = ({ restoreFocus = false, closeMobile = true } = {}) => {
    details().forEach(menu => {
      if (menu.open) menu.open = false;
      // Keep state accurate even when a browser suppresses a redundant toggle.
      setSummaryState(menu);
    });
    if (closeMobile) syncMobileState(false);
    if (restoreFocus) {
      const target = documentRef.activeElement === documentRef.body ? lastMenuFocus : lastMenuFocus;
      if (target && typeof target.focus === 'function') target.focus();
    }
  };

  const onToggle = event => {
    const menu = event.target;
    if (!isElement(menu) || menu.tagName !== 'DETAILS' || !root.contains(menu)) return;
    setSummaryState(menu);

    // Only close peers when this menu is actually open. This avoids a queued
    // close event from the previous menu closing the newly opened one.
    if (menu.open) {
      details().forEach(peer => {
        if (peer !== menu && peer.open) {
          peer.open = false;
          setSummaryState(peer);
        }
      });
    }
  };

  const onDocumentPointer = event => {
    const target = event.target;
    if (isElement(target) && root.contains(target)) return;
    if (getOpenMenus(root).length) close();
  };

  const onDocumentKeydown = event => {
    if (event.key !== 'Escape') return;
    const openMenus = getOpenMenus(root);
    const mobileOpen = toggle?.getAttribute('aria-expanded') === 'true';
    if (!openMenus.length && !mobileOpen) return;
    event.preventDefault();
    const focusTarget = openMenus[openMenus.length - 1]?.querySelector(':scope > summary') || toggle;
    lastMenuFocus = focusTarget || lastMenuFocus;
    close({ restoreFocus: true });
  };

  const onToggleClick = () => {
    if (!toggle) return;
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if (open) {
      close({ restoreFocus: true });
      return;
    }
    lastMenuFocus = toggle;
    syncMobileState(true);
    root.querySelector('summary, a')?.focus();
  };

  const onLinkClick = event => {
    if (!event.target.closest('a')) return;
    close({ closeMobile: true });
    // Do not focus anything here: the browser must preserve destination focus.
  };

  setAllSummaryStates(root);
  syncMobileState(toggle?.getAttribute('aria-expanded') === 'true');
  details().forEach(menu => menu.addEventListener('toggle', onToggle));
  root.addEventListener('click', onLinkClick);
  toggle?.addEventListener('click', onToggleClick);
  documentRef.addEventListener('pointerdown', onDocumentPointer);
  documentRef.addEventListener('keydown', onDocumentKeydown);

  return {
    close,
    openMenus: () => getOpenMenus(root),
    destroy() {
      details().forEach(menu => menu.removeEventListener('toggle', onToggle));
      root.removeEventListener('click', onLinkClick);
      toggle?.removeEventListener('click', onToggleClick);
      documentRef.removeEventListener('pointerdown', onDocumentPointer);
      documentRef.removeEventListener('keydown', onDocumentKeydown);
    },
  };
}
