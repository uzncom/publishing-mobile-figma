import React, { useMemo, useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IcBell,
  IcBoardArrRight,
  IcCalendar,
  IcCheckCircle,
  IcCheckBlue18,
  IcCheckBlue24,
  IcCheckbox,
  IcChevDownBlueGray18,
  IcChevDownBlack24,
  IcChevLeftEnabled18,
  IcChevLeftBlack24,
  IcCircleIncrease,
  IcClip,
  IcClose,
  IcCloseCircle,
  IcCompanyWhite14,
  IcCompanyBlack18,
  IcDeleteBlack18,
  IcDeleteBlack24,
  IcDeleteWhite24,
  IcErrorCircle,
  IcEyeOff,
  IcImg,
  IcInfoCircle,
  IcLightbulb,
  IcMegaphone,
  IcMore,
  IcPdf,
  IcPencilbox,
  IcPpt,
  IcSetting,
  IcTime,
  IcUser,
  IcUsersCheck,
  IcUsersPen,
  IcWifiOff,
  IcZip,
  IconCircleIncreseTest,
  LabelImg,
  LabelPdf,
  LabelPpt,
  LabelZip,
} from "designcenter-figma/icons";

type ScreenProps = {
  onBack: () => void;
};

type IconRenderProps = {
  fill: string;
  color: string;
  opacity: number;
};

type SvgItem = {
  id: string;
  componentName: string;
  colorMode: string;
  render: (props: IconRenderProps) => React.ReactNode;
};

type BuildSvgItemsResult = SvgItem[] | { error: string };

/** publishing-figma/src/views/Svg.js 의 ICON_ITEMS 와 동일 */
const ICON_ITEMS = [
  { name: "IcBell", render: (props: IconRenderProps) => <IcBell {...props} /> },
  { name: "IcBoardArrRight", render: (props: IconRenderProps) => <IcBoardArrRight {...props} /> },
  { name: "IcCalendar", render: (props: IconRenderProps) => <IcCalendar {...props} /> },
  { name: "IcCheckCircle", render: (props: IconRenderProps) => <IcCheckCircle {...props} /> },
  { name: "IcCheckBlue18", render: (props: IconRenderProps) => <IcCheckBlue18 {...props} /> },
  { name: "IcCheckBlue24", render: (props: IconRenderProps) => <IcCheckBlue24 {...props} /> },
  { name: "IcCheckbox", render: (props: IconRenderProps) => <IcCheckbox {...props} /> },
  { name: "IcChevDownBlueGray18", render: (props: IconRenderProps) => <IcChevDownBlueGray18 {...props} /> },
  { name: "IcChevDownBlack24", render: (props: IconRenderProps) => <IcChevDownBlack24 {...props} /> },
  { name: "IcChevLeftEnabled18", render: (props: IconRenderProps) => <IcChevLeftEnabled18 {...props} /> },
  { name: "IcChevLeftBlack24", render: (props: IconRenderProps) => <IcChevLeftBlack24 {...props} /> },
  { name: "IcCircleIncrease", render: (props: IconRenderProps) => <IcCircleIncrease {...props} /> },
  { name: "IcClip", render: (props: IconRenderProps) => <IcClip {...props} /> },
  { name: "IcClose", render: (props: IconRenderProps) => <IcClose {...props} /> },
  { name: "IcCloseCircle", render: (props: IconRenderProps) => <IcCloseCircle {...props} /> },
  { name: "IcCompanyWhite14", render: (props: IconRenderProps) => <IcCompanyWhite14 {...props} /> },
  { name: "IcCompanyBlack18", render: (props: IconRenderProps) => <IcCompanyBlack18 {...props} /> },
  { name: "IcDeleteBlack18", render: (props: IconRenderProps) => <IcDeleteBlack18 {...props} /> },
  { name: "IcDeleteBlack24", render: (props: IconRenderProps) => <IcDeleteBlack24 {...props} /> },
  { name: "IcDeleteWhite24", render: (props: IconRenderProps) => <IcDeleteWhite24 {...props} /> },
  { name: "IcErrorCircle", render: (props: IconRenderProps) => <IcErrorCircle {...props} /> },
  { name: "IcEyeOff", render: (props: IconRenderProps) => <IcEyeOff {...props} /> },
  { name: "IcImg", render: (props: IconRenderProps) => <IcImg {...props} /> },
  { name: "IcInfoCircle", render: (props: IconRenderProps) => <IcInfoCircle {...props} /> },
  { name: "IcLightbulb", render: (props: IconRenderProps) => <IcLightbulb {...props} /> },
  { name: "IcMegaphone", render: (props: IconRenderProps) => <IcMegaphone {...props} /> },
  { name: "IcMore", render: (props: IconRenderProps) => <IcMore {...props} /> },
  { name: "IcPdf", render: (props: IconRenderProps) => <IcPdf {...props} /> },
  { name: "IcPencilbox", render: (props: IconRenderProps) => <IcPencilbox {...props} /> },
  { name: "IcPpt", render: (props: IconRenderProps) => <IcPpt {...props} /> },
  { name: "IcSetting", render: (props: IconRenderProps) => <IcSetting {...props} /> },
  { name: "IcTime", render: (props: IconRenderProps) => <IcTime {...props} /> },
  { name: "IcUser", render: (props: IconRenderProps) => <IcUser {...props} /> },
  { name: "IcUsersCheck", render: (props: IconRenderProps) => <IcUsersCheck {...props} /> },
  { name: "IcUsersPen", render: (props: IconRenderProps) => <IcUsersPen {...props} /> },
  { name: "IcWifiOff", render: (props: IconRenderProps) => <IcWifiOff {...props} /> },
  { name: "IcZip", render: (props: IconRenderProps) => <IcZip {...props} /> },
  { name: "IconCircleIncreseTest", render: (props: IconRenderProps) => <IconCircleIncreseTest {...props} /> },
  { name: "LabelImg", render: (props: IconRenderProps) => <LabelImg {...props} /> },
  { name: "LabelPdf", render: (props: IconRenderProps) => <LabelPdf {...props} /> },
  { name: "LabelPpt", render: (props: IconRenderProps) => <LabelPpt {...props} /> },
  { name: "LabelZip", render: (props: IconRenderProps) => <LabelZip {...props} /> },
];

const PREVIEW_STATES = ["default", "hover", "disabled"];

const OPACITY_BY_STATE = {
  default: 1,
  hover: 0.7,
  disabled: 0.35,
};

/** Svg.js: var(--semantic-text-default, #353C49) */
const ICON_COLOR = "#353C49";

const SCREEN_W = Dimensions.get("window").width;
const PAGE_PAD = 20;
const GRID_GAP = 12;
const CARD_MIN_W = 220;

function buildSvgItems(): BuildSvgItemsResult {
  try {
    return ICON_ITEMS.map(({ name, render }) => ({
      id: name,
      componentName: name,
      colorMode: "unknown",
      render,
    }));
  } catch (e) {
    return { error: e?.message ?? "" };
  }
}

export default function IconGallery({ onBack }: ScreenProps) {
  const [previewState, setPreviewState] = useState("default");

  const { svgItems, loadError } = useMemo(() => {
    const built = buildSvgItems();
    if (Array.isArray(built)) {
      return { svgItems: built, loadError: "" };
    }
    return { svgItems: [], loadError: built.error ?? "" };
  }, []);

  const selectedOpacity = OPACITY_BY_STATE[previewState] ?? 1;

  const numCols = Math.max(1, Math.floor((SCREEN_W - PAGE_PAD * 2 + GRID_GAP) / (CARD_MIN_W + GRID_GAP)));
  const cardWidth = (SCREEN_W - PAGE_PAD * 2 - GRID_GAP * (numCols - 1)) / numCols;

  const iconProps = {
    fill: ICON_COLOR,
    color: ICON_COLOR,
    opacity: selectedOpacity,
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onBack} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={styles.backText}>{"< 뒤로"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <Text style={styles.h2}>SVG Component Preview (Web/RN shared)</Text>

        <View style={styles.stateRow}>
          {PREVIEW_STATES.map((stateKey) => (
            <TouchableOpacity
              key={stateKey}
              onPress={() => setPreviewState(stateKey)}
              style={[styles.stateBtn, previewState === stateKey && styles.stateBtnActive]}
              activeOpacity={0.7}
            >
              <Text style={[styles.stateBtnText, previewState === stateKey && styles.stateBtnTextActive]}>
                {stateKey}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.stateHint}>
          현재 상태: <Text style={styles.strong}>{previewState}</Text> (opacity: {selectedOpacity})
        </Text>

        {svgItems.length === 0 ? (
          <View style={styles.emptyBlock}>
            <Text style={styles.emptyText}>
              아이콘 컴포넌트를 찾지 못했습니다.{"\n"}
              designcenter-figma/icons
            </Text>
            {loadError ? <Text style={styles.emptyCode}>{loadError}</Text> : null}
          </View>
        ) : (
          <View style={styles.grid}>
            {svgItems.map((item) => (
              <View key={item.componentName} style={[styles.card, { width: cardWidth }]}>
                <Text style={styles.cardLabelStrong}>컴포넌트 import</Text>
                <View style={styles.previewBox}>{item.render(iconProps)}</View>
                <Text style={styles.cardMeta}>
                  {item.componentName}
                  {"\n"}
                  {item.id}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    paddingHorizontal: PAGE_PAD,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e5e5",
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563eb",
  },
  scrollContent: {
    padding: PAGE_PAD,
    paddingBottom: 32,
    flexGrow: 1,
  },
  h2: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  stateRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  stateBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  stateBtnActive: {
    backgroundColor: "#e9f1ff",
  },
  stateBtnText: {
    fontWeight: "400",
    fontSize: 14,
    color: "#111",
  },
  stateBtnTextActive: {
    fontWeight: "700",
  },
  stateHint: {
    fontSize: 12,
    marginBottom: 14,
    color: "#333",
  },
  strong: {
    fontWeight: "700",
  },
  emptyBlock: {
    marginTop: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#333",
  },
  emptyCode: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: Platform.select({ ios: "Menlo", android: "monospace", default: "monospace" }),
    color: "#c00",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: GRID_GAP,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  cardLabelStrong: {
    fontSize: 12,
    marginBottom: 8,
    fontWeight: "700",
    color: "#111",
  },
  previewBox: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 6,
    marginBottom: 8,
  },
  cardMeta: {
    fontSize: 12,
    color: "#333",
  },
});
