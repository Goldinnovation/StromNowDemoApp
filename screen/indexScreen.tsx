import { IndexLoginBtnComponent } from '@/components/index/IndexLoginBtnComponent';
import { IndexLogoComponent } from '@/components/index/IndexLogoComponent';
import { useIndexNavHook } from '@/hooks/index/useIndexNavHook';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

const IndexScreen = () => {
  const { handleLoginNavigation } = useIndexNavHook();

  return (
    <LinearGradient
      colors={['#ffffff', '#166534', '#22c55e']}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
      style={{ flex: 1 }}
    >
      <View className="flex-1 items-center justify-center w-full h-full">
        <IndexLogoComponent />
        <IndexLoginBtnComponent onPress={handleLoginNavigation} />
      </View>
    </LinearGradient>
  );
};

export default IndexScreen;