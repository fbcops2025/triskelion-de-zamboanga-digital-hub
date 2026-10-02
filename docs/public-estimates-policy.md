# Public estimates and evidence corrections

Latest user instruction: publish data evidence, identify it as an estimate, and allow readers to challenge the data by submitting a request to hello@weforgeweb.com.

## Public presentation

- Display supported estimates rather than hiding them solely because a current official census is unavailable.
- Preserve the exact source attribution, date, scope, membership definition and uncertainty. Dated estimates are not current audited totals.
- The 2017 estimate of about 800,000 and the separate claim of more than one million worldwide including Sigmas must remain separate and non-comparable. Do not describe either as a current Philippines-only census or extrapolate a new count.
- Cite the available evidence and identify secondary/reporting source chains honestly. No unsupported authority, official verification or organizational endorsement claims.
- Add a visible action: “Question this estimate?” with mailto:hello@weforgeweb.com and an appropriate subject identifying the relevant article or metric. Ask for the claim being challenged and supporting public evidence. Do not send email automatically.

## Scope boundary

This is a request for editorial evidence correction, not complaint intake, chapter/council dispute handling, blood-pledge intake or financial collection. Those responsibilities remain with the chapters and councils.

The user authorizes public estimate content in the implementation, not a new Git push, production deployment or sending email. Private personal records, restricted ritual/password material and unlicensed photographs remain excluded.

## Implementation handoff and ownership gate

- **Blocked until release:** the national-records feature is actively owned by `fb7a6ba0` (`src/editorial/content.mjs`, `scripts/editorial-build.mjs`, and `src/editorial/editorial.css`). Do not race or overwrite that work.
- **Blocked until release:** the impact evidence tiles/views are actively owned by `135d8e9e` (`src/app.mjs`, `src/content.mjs`, and the relevant impact styles). Do not race or overwrite that work.
- After both owners release their changes, apply this policy at the shared rendering points: keep every attributed estimate visible; place an adjacent `Estimate` label with date, scope, source attribution, and explanation; preserve the separate 2017 ~800,000 and >1 million worldwide including Sigmas claims without comparison or a headline current count; and add a plain `Question this estimate?` / `Suggest an evidence correction` `mailto:hello@weforgeweb.com` link.
- The mailto subject must be URL-encoded and identify the metric and article. The body may invite the reader to identify the claim and provide a public supporting reference. There must be no automatic send, form, backend record, complaint workflow, financial role, or central-complaint claim.
- Preserve the existing creative artwork, footer, and schema behavior. Only narrow URL/mailto/source checks are authorized before approval; no visual/UI lint, deploy, push, install, or secret-related work is authorized in this handoff.
