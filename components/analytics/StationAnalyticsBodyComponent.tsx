import { ScrollView, View } from 'react-native';
import StationInfoComponent from './StationInfoComponent';
import StationPowerComponent from './StationPowerComponent';

type StationAnalyticsBodyComponentProps = {
  item: {
    id: string;
    name: string;
    physical_address: {
      street: string;
      number: string;
      postal_code: string;
      city: string;
    };
    power: any;
  };
  piewidthAndHeight: number;
};

/**
 * Displays the body of the analytics card for a charging station.
 * 
 * Features:
 * - **Station Info**: Displays the name and address of the charging station
 * - **Station Power**: Displays the power information for the charging station
 * 
 * @param {object} item - The station data
 * @param {number} piewidthAndHeight - The width and height of the pie chart
 * 
 * @returns The body of the analytics card for a charging station
 */


const StationAnalyticsBodyComponent = ({
  item,
  piewidthAndHeight,
}: StationAnalyticsBodyComponentProps) => {
  // Get power data for THIS station only
  const stationPowerKeys = item.power ? Object.keys(item.power) : [];
  const stationPowerValues = stationPowerKeys.map((key) =>
    item.power[key]?.available ? 1 : 0
  );

  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
      }}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Card Container */}
      <View className="w-[98%] h-full flex-row justify-between items-center bg-black/80 border border-white/20 rounded-lg p-2">
        <StationInfoComponent name={item.name} address={item.physical_address} />

        <StationPowerComponent
          stationId={item.id}
          powerKeys={stationPowerKeys}
          powerValues={stationPowerValues}
          widthAndHeight={piewidthAndHeight}
        />
      </View>
    </ScrollView>
  );
};

export default StationAnalyticsBodyComponent;
