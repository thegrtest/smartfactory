# Engineering standards

## Core limits

| Item | Preferred | Hard limit |
|---|---:|---:|
| TypeScript or TSX file | 300 lines | 500 lines |
| Page or feature component | 200 lines | 300 lines |
| Function | 40 lines | 80 lines |
| CSS file | 300 lines | 500 lines |
| Test file | 400 lines | 700 lines |
| Function parameters | 3 | 4 |
| Cyclomatic complexity | 8 | 12 |

Generated files and lockfiles are the only normal exceptions. Any other exception must be narrow, documented, and reviewed.

## TypeScript

- Keep strict mode enabled.
- Do not introduce `any` without isolating it at an external boundary and documenting why.
- Prefer `unknown` for untrusted input, then validate and narrow it.
- Do not use `@ts-ignore`. A temporary `@ts-expect-error` requires a reason.
- Validate form values, environment values, API responses, and CMS content at runtime.

## Components

- Give each file one clear responsibility.
- Route files compose features; they do not own large implementations.
- Use Server Components by default and client components only for browser behavior.
- Keep state close to the interaction that owns it.
- Do not create vague dumping grounds such as `helpers.ts` or `misc.ts`.
- Create shared abstractions only after there are at least two real consumers.

## Styling

- Use named design tokens for brand colors, spacing, typography, radius, and motion.
- Keep global CSS limited to tokens, defaults, layout primitives, and true global behavior.
- Build mobile-first and test with content-driven breakpoints.
- Do not rely on color alone to communicate meaning.
- Respect reduced-motion preferences.

## Content

- Label unknown copy and simulated data honestly.
- Do not publish unverified metrics, testimonials, logos, certifications, or integration claims.
- Do not commit customer data, plant identifiers, network details, secrets, or production screenshots.
- Claims such as “real-time,” “predictive,” “secure,” or “AI-powered” require a definition and evidence.

## Security

- The public site never communicates directly with PLC, SCADA, historian, MES, or other plant-floor systems.
- Future product services use authenticated APIs, least privilege, controlled data flows, and explicit IT/OT boundaries.
- Treat all browser, form, URL, CMS, webhook, and API input as untrusted.
- Keep secrets in the hosting environment, not source control.
- Review changes involving authentication, authorization, forms, uploads, dependencies, headers, cookies, integrations, or logging.

## Accessibility

Target WCAG 2.2 Level AA:

- Use semantic HTML before ARIA.
- Support keyboard navigation and visible focus.
- Provide labels, useful validation errors, and meaningful alternative text.
- Meet contrast and target-size requirements.
- Check focus behavior around sticky elements and dynamic content.

## Change flow

1. Define the user outcome and acceptance criteria.
2. Scope affected routes, components, data, risks, and placeholders.
3. Implement one cohesive change.
4. Self-review for dead code, duplication, unsafe assertions, and accidental claims.
5. Run lint, type checking, tests, and the production build.
6. Review behavior, accessibility, security, and maintainability.
7. Deploy through the normal pipeline and verify the release.

## Definition of done

- Acceptance criteria are satisfied.
- Responsive and keyboard behavior are deliberate.
- Missing, loading, success, and failure states are handled when relevant.
- Required automated checks pass.
- No unapproved claims or sensitive information are present.
- The change can be deployed and rolled back through the normal pipeline.
