import StationAnalyticsBodyComponent from "@/components/analytics/StationAnalyticsBodyComponent";
import FlashbackComponent from "@/components/flashback/FlashbackComponent";
import { FlatList, StyleSheet, View } from "react-native";


interface AnalyticsScreenProps {
    stationData: any;
    piewidthAndHeight: number;
    isLoading: boolean;
    flashback: boolean;
    flashbackStatus: string | null;
    flashbackMessage: string;
}

const AnalyticsScreen = ({
  stationData,
  piewidthAndHeight,
  isLoading,
  flashback,
  flashbackStatus,
  flashbackMessage,
}: AnalyticsScreenProps) => {
  return (
    <View className="flex-1">
        
             <FlashbackComponent
             visible={flashback}
             status={flashbackStatus}
             message={flashbackMessage}
           />
      
      {stationData && stationData.length > 0 && (
        <FlatList
          data={stationData}
          contentContainerStyle={styles.containerStyle}
          style={styles.flatList}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 1,
                flex: 1,
                height: 150,
                marginTop: 11,
              }}
            >
              <StationAnalyticsBodyComponent
                item={item}
                piewidthAndHeight={piewidthAndHeight}
              />
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    flatList: {
        width: "100%",
        height: "100%",
    },

    containerStyle: {
    
        paddingBottom: 150,
        flexGrow: 1,
        gap: 25,
      
    },
});

export default AnalyticsScreen;
