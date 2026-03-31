import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ViewList from "./src/view/viewList";

export default function App() {
  return (
    <SafeAreaProvider>
      <ViewList />
    </SafeAreaProvider>
  );
}