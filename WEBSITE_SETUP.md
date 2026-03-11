# GitHub Pages Setup

This workspace now contains a static portfolio website:

- `index.html` (PLL page)
- `ldo.html`
- `sar-adc.html`
- `assets/styles.css`
- `assets/script.js`

## Publish Steps (GitHub)

1. Create a new GitHub repository (or use an existing one).
2. Push this folder content to the repository root.
3. In GitHub: `Settings -> Pages`.
4. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Save. GitHub will provide a URL like:
   - `https://<username>.github.io/<repo-name>/`

## Notes

- Keep `index.html` at repository root for the main landing page.
- Existing folder names with spaces are supported; browser handles URL encoding.
- If you rename folders/files later, update image links in the HTML pages.

## Optional Next Improvements

- Add a profile photo and short About section.
- Add downloadable PDF resume link.
- Add project tags (technology, specs, status).
- Add block-level detail pages for each PLL/LDO/SAR submodule.
