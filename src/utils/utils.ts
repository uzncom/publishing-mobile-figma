import type { TextStyle } from "react-native";
import { Platform } from "react-native";
import { tokens } from "designcenter-figma/native-tokens";

type TokenRecord = Record<string, unknown>;

export type TokenFontItem = {
  id: string;
  label: string;
  style: TextStyle;
  fontWeight: string;
};

const readToken = (tokenPath: string): unknown => {
  let value: unknown = tokens;

  for (const key of tokenPath.split(".")) {
    if (value === undefined || value === null || typeof value !== "object" || !(key in (value as TokenRecord))) {
      throw new Error(`[FontToken] Missing token: tokens.${tokenPath}`);
    }
    value = (value as TokenRecord)[key];
  }

  return value;
};

export const getTokenFontFamily = (): string => {
  const tokenFamily = String(readToken("typo.body.largeDefault.fontFamily"));
  if (Platform.OS === "android" && tokenFamily === "Pretendard GOV") {
    return "PretendardGOV";
  }
  return tokenFamily;
};

const getAndroidPretendardFileFamily = (weight: number): string => {
  if (weight >= 700) return "PretendardGOV-Bold";
  if (weight >= 500) return "PretendardGOV-Medium";
  return "PretendardGOV-Regular";
};

export const getTokenFontStyle = (weight: number | string): TextStyle => {
  const parsedWeight = Number(weight);
  const safeWeight = Number.isFinite(parsedWeight) ? parsedWeight : 400;

  if (Platform.OS === "android") {
    return {
      fontFamily: getAndroidPretendardFileFamily(safeWeight),
    };
  }

  return {
    fontFamily: getTokenFontFamily(),
    fontWeight: String(safeWeight) as TextStyle["fontWeight"],
  };
};

export const getTokenFontItems = (): TokenFontItem[] =>
  Object.entries(readToken("fontWeight") as TokenRecord).map(([label, value]) => {
    const numericWeight = Number(value);
    return {
      id: label,
      label,
      style: getTokenFontStyle(numericWeight),
      fontWeight: String(numericWeight),
    };
  });
