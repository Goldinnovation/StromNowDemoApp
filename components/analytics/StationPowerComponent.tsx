import { Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

type StationPowerComponentProps = {
  stationId: string;
  powerKeys: string[];
  powerValues: number[];
  widthAndHeight?: number;
};

/**
 * Displays the power information for a charging station on the right side of the analytics card.
 * 
 * Features:
 * - **Pie Chart**: Visual representation of power levels (kW) with color coding
 *   - Green: Available charging points
 *   - Red: Unavailable charging points
 * - **Power List**: Detailed list showing each power level (kW) with its availability status
 * 
 * @param {string} stationId - Unique identifier for the station
 * @param {string[]} powerKeys - Array of power levels in kW (e.g., ["22", "50", "175"])
 * @param {number[]} powerValues - Array of availability values (1 = available, 0 = not available)
 * @param {number} [widthAndHeight=70] - Size of the pie chart in pixels
 * 
 * @returns Right section component with pie chart and power availability list
 */
const StationPowerComponent = ({
  stationId,
  powerKeys,
  powerValues,
  widthAndHeight = 70,
}: StationPowerComponentProps) => {
  return (
    <View className="w-[40%] h-full flex flex-col justify-between items-center">
      {/* Power Chart */}
      <View className="w-full h-[70%] flex-row justify-center items-center pl-6">
        {powerValues.length > 0 && powerValues.some((v: number) => v > 0) ? (
          <PieChart
            widthAndHeight={widthAndHeight}
            series={powerKeys.map((key: string) => ({
              value: Number(key),
              color: powerValues[powerKeys.indexOf(key)] > 0 ? '#4caf50' : '#f44336',
            }))}
            cover={0.45}
          />
        ) : (
          <Text className="text-white/80 text-sm">No power data</Text>
        )}
      </View>

      {/* Power List */}
      <View className="w-full h-[30%] flex-col justify-end items-start pl-2">
        {powerKeys.map((key: string, index: number) => (
          <View key={`${stationId}-${key}`} className="flex-row justify-between items-center w-full">
            <Text className="text-white/80 text-xs font-bold">{key} kW</Text>
            <Text className={`text-sm ${powerValues[index] > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {powerValues[index] > 0 ? 'Available' : 'Not Available'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default StationPowerComponent;
