import { Text, View } from 'react-native';

type StationInfoComponentProps = {
  name: string;
  address: {
    street: string;
    number: string;
    postal_code: string;
    city: string;
  };
};

/**
 * Displays the metadata information for a charging station on the left side of the analytics card.
 * 
 * Shows:
 * - **Station Name**: The name/identifier of the charging station
 * - **Address**: Complete address including street, number, postal code, and city
 * 
 * @param {string} name - Name of the charging station
 * @param {object} address - Address object containing street, number, postal_code, and city
 * 
 * @returns Left section component displaying station metadata
 */
const StationInfoComponent = ({ name, address }: StationInfoComponentProps) => {
  return (
    <View className="w-[60%] h-full flex-col justify-center items-center">
      {/* Name */}
      <View className="w-full h-[50%] flex-col justify-start items-center">
        <View className="w-full h-[40%] flex-row justify-start p-1 items-end">
          <Text className="text-white text-md font-semibold">Name: </Text>
        </View>
        <View className="w-full h-[60%] flex-row justify-start p-1 items-center">
          <Text className="text-white text-sm">{name}</Text>
        </View>
      </View>

      {/* Address */}
      <View className="w-full h-[50%] flex-col justify-start items-center">
        <View className="w-full h-[50%] flex-row justify-between items-end">
          <Text className="text-white text-md font-semibold">Address: </Text>
          <Text className="text-white text-xs font-semibold">Zip Code</Text>
        </View>
        <View className="w-full h-[50%] flex-row justify-between items-end">
          <Text className="text-white text-sm">
            {address.street}, {address.number}
          </Text>
          <Text className="text-white text-sm">
            {address.postal_code}, {address.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StationInfoComponent;
