import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/css/styles";
import { getTokenFontItems, getTokenFontStyle } from "../utils/utils";

const titleFontStyle = getTokenFontStyle(700);
const fontItems = getTokenFontItems();

const languageCards = [
  { id: "ko", title: "한국어", sample: "디지털 비즈니스 플랫폼" },
  { id: "en", title: "영어", sample: "Digital Business Platform" },
  { id: "ja", title: "일본어", sample: "デジタルビジネスプラットフォーム" },
  { id: "zh", title: "중국어", sample: "数字化商务平台" },
  { id: "num", title: "숫자", sample: "1 2 3 4 5 6 7 8 9" },
];

export default function FontTest({ onBack }) {
  return (
    <SafeAreaView style={[styles.app, localStyles.screen]} edges={["top"]}>
      <View style={localStyles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={localStyles.backText}>{"< 뒤로"}</Text>
        </TouchableOpacity>
      </View>

      <View style={localStyles.body}>
        <Text style={styles.title}>Font Test</Text>
        <Text style={styles.description}>폰트 적용 화면입니다.</Text>
        <FlatList
          data={languageCards}
          keyExtractor={(item) => item.id}
          contentContainerStyle={localStyles.list}
          renderItem={({ item }) => (
            <View style={localStyles.fontCard}>
              <View style={localStyles.fontCardHeader}>
                <Text style={localStyles.cardTitle}>{item.title}</Text>
              </View>
              <View style={localStyles.fontCardBody}>
                {fontItems.map((font) => (
                  <View key={`${item.id}-${font.id}`} style={localStyles.fontRow}>
                    <Text style={localStyles.fontName}>
                      {`${font.style.fontFamily} / ${font.label} (${font.fontWeight})`}
                    </Text>
                    <Text
                      style={[
                        localStyles.previewText,
                        font.style,
                      ]}
                    >
                      {item.sample}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        />
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
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 24,
  },
  list: {
    paddingBottom: 24,
  },
  cardTitle: {
    ...titleFontStyle,
    fontSize: 14,
    color: "#374151",
  },
  fontCard: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  fontCardHeader: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    backgroundColor: "#f8fafc",
  },
  fontCardBody: {
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 6,
  },
  fontRow: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  fontName: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  previewText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#111827",
  },
});
