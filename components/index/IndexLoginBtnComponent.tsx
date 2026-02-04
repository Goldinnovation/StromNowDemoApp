import { View, Text, TouchableOpacity } from 'react-native';

type IndexLoginBtnComponentProps = {
  onPress: () => void;
};

export function IndexLoginBtnComponent({ onPress }: IndexLoginBtnComponentProps) {
  return (
    <View className="h-[10%] w-full rounded-md justify-center items-center">
      <View className="w-[40%] h-[60%] bg-black/50 justify-center items-center bg-red-500 rounded-lg border border-white/50">
        <TouchableOpacity
          onPress={onPress}
          className="w-full h-full justify-center items-center"
        >
          <Text className="text-white text-2xl font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
