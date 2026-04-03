#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

DEFAULT_SIMULATOR="${IOS_SIMULATOR:-iPhone 16 Pro}"
RUN_IOS_ARGS=("$@")

if [ "${#RUN_IOS_ARGS[@]}" -gt 0 ]; then
  echo "Running iOS with custom arguments: ${RUN_IOS_ARGS[*]}"
  exec npx react-native run-ios --scheme reactNativeTest "${RUN_IOS_ARGS[@]}"
fi

BOOTED_UDID="$(xcrun simctl list devices booted | awk -F '[()]' '/Booted/ {print $2; exit}')"

if [ -n "${BOOTED_UDID}" ]; then
  echo "Using booted simulator: ${BOOTED_UDID}"
  exec npx react-native run-ios --scheme reactNativeTest --udid "${BOOTED_UDID}"
fi

open -a Simulator >/dev/null 2>&1 || true

echo "Booting and launching on simulator: ${DEFAULT_SIMULATOR}"
exec npx react-native run-ios --scheme reactNativeTest --simulator "${DEFAULT_SIMULATOR}"
