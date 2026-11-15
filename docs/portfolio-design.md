# ALKORNITHM portfolio — Terminal direction

## Design intent
A terminal-inspired personal portfolio with a typography-led hero. It should feel like an engineer's workspace rather than a hacker cliché: calm, precise, readable, and editorial.

## Visual system
- Themes: light and dark, controlled by the existing next-themes toggle.
- Light: warm near-white canvas, charcoal text, muted gray surfaces, restrained forest-green accent.
- Dark: deep blue-charcoal canvas, soft off-white text, subtle borders, brighter terminal-green accent.
- Typography: Geist for reading and large headlines; JetBrains Mono for prompts, labels, metadata, and code-like details.
- Shape language: compact rounded corners, thin borders, low-contrast surfaces; avoid excessive gradients and glass effects.
- Motion: subtle hover lift and a restrained blinking terminal cursor; respect reduced-motion preferences.

## Homepage information architecture
1. Sticky navigation — ALKORNITHM wordmark, numbered anchor links, Ghost-powered Writing link, theme switch, GitHub.
2. Hero — terminal path/command eyebrow, large typography headline, concise introduction, project/contact calls to action, location and focus metadata.
3. Profile terminal — terminal window containing identity, areas of focus, and education.
4. About / stack — short biography and technology tags.
5. Selected projects — three responsive project cards with category, description, stack, and repository link.
6. Experience — Cube SoftTech current role and SCG Chemicals co-op experience.
7. Writing — route into the Ghost-powered /blog section.
8. Contact — email, LinkedIn, and GitHub actions.
9. Footer — ALKORNITHM identity and “May the bug be with you.”

## Responsive behavior
- Navigation becomes a horizontally scrollable row on narrow screens.
- Hero stacks typography and terminal panel vertically.
- Project cards collapse from three columns to one.
- Experience metadata moves below the role title on narrow screens.
- All actions retain visible text or accessible labels.

## Implementation notes
- Homepage is a server component; theme switching remains isolated in the existing client-side ThemeToggle.
- Existing Ghost blog route and API integration are left intact.
- Theme tokens are defined in src/app/globals.css; do not hard-code theme-specific colors into page components.
- Verify with npm run lint and npm run build locally after pulling the commit. GitHub connector edits do not execute the project test suite.
