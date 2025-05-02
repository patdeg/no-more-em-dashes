#!/usr/bin/env bash
set -euo pipefail

# Directory containing the extension sources
EXT_DIR="no-more-em-dashes"
MANIFEST_FILE="${EXT_DIR}/manifest.json"

# Verify manifest exists
if [[ ! -f "${MANIFEST_FILE}" ]]; then
  echo "Error: manifest.json not found in ${EXT_DIR}" >&2
  exit 1
fi

# Extract version from manifest.json
VERSION=$(grep -Po '"version":\s*"\K[^"]+' "${MANIFEST_FILE}")

# Name of the output ZIP
ZIP_NAME="${EXT_DIR}-${VERSION}.zip"

echo "Building Chrome extension package: ${ZIP_NAME}"

# Clean up any existing ZIP
rm -f "${ZIP_NAME}"

# Create ZIP of extension contents (no top-level folder)
(
  cd "${EXT_DIR}"
  zip -r "../${ZIP_NAME}" . -x "*.DS_Store" -x "__MACOSX/*"
)

echo "Package created: ${ZIP_NAME}"