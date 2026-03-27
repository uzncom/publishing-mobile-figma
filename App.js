import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.app}>
      <View style={styles.card}>
        <Text style={styles.title}>Design Token RN Demo</Text>

        <Text style={styles.description}>
          base + semantic 토큰 테스트
        </Text>

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
  );
}