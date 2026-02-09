import * as Location from "expo-location"
import { Platform } from "react-native";



const handleUserLocation = async() => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") return;

  // Check if location services are on
  const enabled = await Location.hasServicesEnabledAsync();
  if (!enabled) {
    if (Platform.OS === 'android') {
      await Location.enableNetworkProviderAsync();
    }
  }

  let currentLocation;
  try {
    currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
  } catch {
    try {
      currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Lowest,
      });
    } catch {
      currentLocation = await Location.getLastKnownPositionAsync();
    }
  }

  if (!currentLocation) {
    // Fallback
    console.log('No current location found, using fallback coordinates');
    return { latitude: 52.479, longitude: 13.439, reverseGeoCedAdresse: [] };
  }


     

}


export default handleUserLocation