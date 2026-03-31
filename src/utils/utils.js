import { tokens } from "designcenter-figma/native-tokens";
import { Platform } from "react-native";

const readToken = (path) => {
  let value = tokens;
  for (const key of path.split(".")) {
    if (value === undefined || value === null || !(key in Object(value))) {
      throw new Error(`[FontToken] Missing token: tokens.${path}`);
    }
    value = value[key];
  }
  return value;
};

export const getTokenFontFamily = () => {
  const tokenFamily = readToken("typo.body.largeDefault.fontFamily");
  if (Platform.OS === "android" && tokenFamily === "Pretendard GOV") {
    return "PretendardGOV";
  }
  return tokenFamily;
};

const getAndroidPretendardFileFamily = (weight) => {
  if (weight >= 700) return "PretendardGOV-Bold";
  if (weight >= 500) return "PretendardGOV-Medium";
  return "PretendardGOV-Regular";
};

export const getTokenFontStyle = (weight) => {
  const parsedWeight = Number(weight);
  const safeWeight = Number.isFinite(parsedWeight) ? parsedWeight : 400;
  if (Platform.OS === "android") {
    return {
      fontFamily: getAndroidPretendardFileFamily(safeWeight),
    };
  }
  return {
    fontFamily: getTokenFontFamily(),
    fontWeight: String(safeWeight),
  };
};

export const getTokenFontItems = () =>
  Object.entries(readToken("fontWeight")).map(([label, value]) => {
    const numericWeight = Number(value);
    return {
      id: label,
      label,
      style: getTokenFontStyle(numericWeight),
      fontWeight: String(numericWeight),
    };
  });
