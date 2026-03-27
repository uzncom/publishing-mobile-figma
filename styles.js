import { StyleSheet } from "react-native";
import { tokens } from "designcenter-figma/dist/js/native-tokens";

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: tokens.color.background.default,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  card: {
    width: 320,
    backgroundColor: tokens.color.background.surface,
    borderRadius: tokens.radius[200],
    padding: 24,
  },

  title: {
    fontSize: tokens.typography.heading.fontSize,
    fontWeight: tokens.typography.heading.fontWeight,
    color: tokens.color.text.primary,
    marginBottom: 16,
  },

  description: {
    fontSize: tokens.typography.body.fontSize,
    color: tokens.color.text.secondary,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: tokens.color.brand.primary,
    padding: 16,
    borderRadius: tokens.radius[200],
    marginBottom: 8,
  },

  primaryButtonText: {
    color: tokens.color.text.onPrimary,
    textAlign: "center",
    fontWeight: tokens.typography.fontWeight.medium,
  },

  secondaryButton: {
    backgroundColor: tokens.color.background.surface,
    padding: 16,
    borderRadius: tokens.radius[200],
    borderWidth: 1,
    borderColor: tokens.color.border.default,
    marginBottom: 16,
  },

  secondaryButtonText: {
    color: tokens.color.brand.primary,
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
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;