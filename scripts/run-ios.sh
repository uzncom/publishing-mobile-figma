#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

APP_PATH="ios/build/Build/Products/Debug-iphonesimulator/reactNativeTest.app"
DEFAULT_SIMULATOR="${IOS_SIMULATOR:-iPhone 16 Pro}"

BOOTED_UDID="$(xcrun simctl list devices booted | awk -F '[()]' '/Booted/ {print $2; exit}')"
if [ -z "${BOOTED_UDID}" ]; then
  xcrun simctl boot "${DEFAULT_SIMULATOR}" >/dev/null 2>&1 || true
  open -a Simulator
fi

npx react-native build-ios --scheme reactNativeTest --mode Debug --buildFolder ios/build

if [ ! -d "${APP_PATH}" ]; then
  echo "Built app not found at ${APP_PATH}"
  exit 1
fi

BUNDLE_ID="$(/usr/libexec/PlistBuddy -c 'Print :CFBundleIdentifier' "${APP_PATH}/Info.plist")"

xcrun simctl install booted "${APP_PATH}"
xcrun simctl launch booted "${BUNDLE_ID}"

echo "Launched ${BUNDLE_ID} on booted simulator."
