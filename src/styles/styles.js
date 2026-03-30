import { StyleSheet } from "react-native";
import { tokens } from "designcenter-figma"; // designcenter-figma의 main이 dist/js/native-tokens.js라서 패키지 루트만 써도 동일

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: tokens.semantic.bg.accentBlueDefault,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    width: 320,
    backgroundColor: tokens.semantic.bg.inverse,
    borderRadius: tokens.radius[200],
    padding: 24,
  },

  title: {
    fontSize: tokens.typo.title.mediumStrong.fontSize,
    fontWeight: tokens.typo.title.mediumStrong.fontWeight,
    color: tokens.semantic.text.strong,
    marginBottom: 16,
  },

  description: {
    fontSize: tokens.typo.body.smallDefault.fontSize,
    fontWeight: tokens.typo.body.smallDefault.fontWeight,
    color: tokens.semantic.text.subtle,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: tokens.semantic.bg.brandDefault,
    padding: 16,
    borderRadius: tokens.radius[200],
    marginBottom: 8,
  },

  primaryButtonText: {
    color: tokens.semantic.text.inverse,
    textAlign: "center",
    fontWeight: tokens.fontWeight.medium,
  },

  secondaryButton: {
    backgroundColor: tokens.semantic.bg.inverse,
    padding: 16,
    borderRadius: tokens.radius[200],
    borderWidth: 1,
    borderColor: tokens.semantic.border.neutralDefault,
    marginBottom: 16,
  },

  secondaryButtonText: {
    color: tokens.semantic.text.brandDefault,
    textAlign: "center",
  },

  boxGroup: {
    flexDirection: "row",
    gap: 12,
  },

  semanticBox: {
    flex: 1,
    padding: 16,
    borderRadius: tokens.radius[200],
    backgroundColor: tokens.semantic.bg.brandDefault,
  },

  baseBox: {
    flex: 1,
    padding: 16,
    borderRadius: tokens.radius[200],
    backgroundColor: tokens.base.blue[500],
  },

  boxText: {
    color: tokens.semantic.text.inverse,
    textAlign: "center",
  },
});

export default styles;
