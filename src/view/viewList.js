import React, { useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, FlatList, BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontTest from "./FontTest";
import TokenTest from "./TokenTest";

export default function ViewList() {
  const [selectedView, setSelectedView] = useState(null);

  useEffect(() => {
    const onHardwareBackPress = () => {
      if (selectedView !== null) {
        setSelectedView(null);
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener("hardwareBackPress", onHardwareBackPress);
    return () => subscription.remove();
  }, [selectedView]);

  const viewItems = useMemo(
    () => [
      { id: "TokenTest", label: "TokenTest 화면 열기" },
      { id: "FontTest", label: "FontTest 화면 열기" },
    ],
    []
  );

  if (selectedView === "TokenTest") {
    return <TokenTest onBack={() => setSelectedView(null)} />;
  }

  if (selectedView === "FontTest") {
    return <FontTest onBack={() => setSelectedView(null)} />;
  }

  return (
    <SafeAreaView style={localStyles.container} edges={["top"]}>
      <Text style={localStyles.title}>View List</Text>
      <FlatList
        data={viewItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={localStyles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={localStyles.listItem}
            onPress={() => setSelectedView(item.id)}
          >
            <Text style={localStyles.listItemText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: "#f7f9fc",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "left",
  },
  listContainer: {
    paddingBottom: 20,
  },
  listItem: {
    width: "100%",
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e7eaf0",
    marginBottom: 10,
  },
  listItemText: {
    color: "#1f2937",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
  },
});
