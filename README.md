# Triskelion de Zamboanga Digital Information & Community Hub

Phase 1 local implementation of the official public information hub. This is an approval-safe, static-first website: unknown official facts remain visibly marked for approval, and AI or form submissions never publish automatically.

## Local commands

```bash
npm run lint
npm test
npm run build
npm run preview
```

The preview serves the project directory at `http://localhost:4173` by default.

## Governance notes

- Public content is represented in `src/content.mjs` with `approvalStatus` and `verificationStatus` fields.
- Concern reports are private by default and are not rendered into public content.
- No official officers, dates, contacts, events, photos, or claims are invented in this scaffold.
- Publication requires human approval and a traceable approved source.
