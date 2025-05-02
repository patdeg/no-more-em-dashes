# no-more-em-dashes

Repository: https://github.com/patdeg/no-more-em-dashes

Author: Patrick Deglon
Contact: pdeglon@gmail.com
Location: San Diego, CA, USA

A simple Chrome extension that converts all em-dashes (—) to normal hyphens (-) on web pages.

## Contents

- no-more-em-dashes/manifest.json — Extension manifest  
- no-more-em-dashes/content.js — Core replacement logic  
- no-more-em-dashes/icons/ — Directory for icon assets  
- LICENSE — MIT License  
- CHANGELOG.md — Project changelog  
- docs/privacy_policy.md — Privacy Policy  
- docs/terms_of_service.md — Terms of Service

## Installation (Unpacked)

1. Clone or download this repository.  
2. Build icons and place them under `no-more-em-dashes/icons/` (16×16, 48×48, 128×128).  
3. Open `chrome://extensions` in Chrome.  
4. Enable "Developer mode".  
5. Click "Load unpacked" and select the `no-more-em-dashes/` directory.

## Packaging & Publishing

1. Ensure all required files are present:
   - `manifest.json`
   - `content.js`
   - `icons/` (icon16.png, icon48.png, icon128.png)
   - `LICENSE`
   - `CHANGELOG.md`
   - Hosted Privacy Policy URL (e.g., via GitHub Pages)
   - Hosted Terms of Service URL
2. Prepare a ZIP archive of the `no-more-em-dashes/` folder.
3. Create a developer account on the Chrome Web Store Developer Dashboard (one-time $5 fee).
4. In the dashboard, click "New Item" and upload the ZIP.
5. Fill in store listing details:
   - Title, short and long description  
   - Icon (128×128) and screenshots (1280×800)  
   - Privacy Policy URL  
   - Support URL or homepage  
6. Choose visibility (public, unlisted, etc.) and distribution options.
7. Submit for review. Once approved, your extension will be available on the Chrome Web Store.

## Development

Modify `content.js` to adjust behavior, then increment `version` in `manifest.json` and update `CHANGELOG.md`.