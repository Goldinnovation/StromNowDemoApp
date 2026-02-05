import { View, Text } from "react-native";
import useAnalyticsHook from "@/hooks/analytics/useAnalyticsHook";
import AnalyticsScreen from "@/screen/analyticsScreen";

const AnalyticsTab = () => {
  const {
    stationData,
    piewidthAndHeight,
    isLoading,
    flashback,
    flashbackStatus,
    flashbackMessage,
  } = useAnalyticsHook();
  return (
    <View className="flex-1 ">
      <AnalyticsScreen
        stationData={stationData}
        piewidthAndHeight={piewidthAndHeight}
        isLoading={isLoading}
        flashback={flashback}
        flashbackStatus={flashbackStatus}
        flashbackMessage={flashbackMessage}
      />
    </View>
  );
};

export default AnalyticsTab;
