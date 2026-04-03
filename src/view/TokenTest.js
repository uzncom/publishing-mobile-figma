import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/css/styles";

export default function TokenTest({ onBack }) {
  return (
    <SafeAreaView style={[styles.app, localStyles.screen]} edges={["top"]}>
      <View style={localStyles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={localStyles.backText}>{"< 뒤로"}</Text>
        </TouchableOpacity>
      </View>

      <View style={localStyles.body}>
        <View style={styles.card}>
          <Text style={styles.title}>Design Token RN Demo</Text>

          <Text style={styles.description}>base + semantic 토큰 테스트</Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Primary Button</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Secondary Button</Text>
          </TouchableOpacity>

          <View style={styles.boxGroup}>
            <View style={styles.semanticBox}>
              <Text style={styles.boxText}>semantic</Text>
            </View>

            <View style={styles.baseBox}>
              <Text style={styles.boxText}>base</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 0,
  },
  header: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e7eaf0",
    backgroundColor: "#ffffff",
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563eb",
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
