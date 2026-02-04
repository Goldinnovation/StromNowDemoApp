import NavLoadingComponent from '@/components/loading/navLaodingComponent';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { store } from '@/store/store';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import './global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false, gestureEnabled: false,  headerBackVisible: false,  }} />
        </Stack>
        <NavLoadingComponent />
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
