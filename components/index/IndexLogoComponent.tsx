import { Image as ExpoImage } from 'expo-image';
import { View } from 'react-native';

export function IndexLogoComponent() {
  return (
    <View className="h-[10%] w-full rounded-md justify-center items-center mb-10">
      <ExpoImage
        source={require('@/assets/images/stromNowLogo.png')}
        style={{ width: '100%', height: '100%' }}
        contentFit="contain"
      />
    </View>
  );
}
