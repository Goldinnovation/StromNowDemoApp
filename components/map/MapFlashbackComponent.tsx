import { Text, View } from 'react-native';

type MapFlashbackComponentProps = {
  visible: boolean;
  status: 'success' | 'error' | string | null;
  message: string;
};

const MapFlashbackComponent = ({
  visible,
  status,
  message,
}: MapFlashbackComponentProps) => {
  if (!visible) return null;

  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-50 flex justify-center items-center">
      <View
        className={`h-[10%] w-[80%] justify-center items-center 
          ${
            status === 'success'
              ? 'bg-green-500/50 border border-green-500'
              : status === 'error'
              ? 'bg-red-500/50 border border-red-500'
              : 'bg-gray-500/50 border border-gray-500'
          } rounded-lg`}
      >
        <Text className="text-white text-center text-lg font-bold">
          {message}
        </Text>
      </View>
    </View>
  );
};

export default MapFlashbackComponent;
