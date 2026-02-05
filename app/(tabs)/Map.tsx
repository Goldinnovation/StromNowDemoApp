import MarkerIcon from '@/assets/icons/markerIcon';
import useMapHook from '@/hooks/map/useMapHook';
import Mapbox from '@rnmapbox/maps';
import { StyleSheet, View } from 'react-native';
import MapScreen from '@/screen/mapScreen';



const MapTab = () => {
  const { userLatitude, userLongitude } = useMapHook();
    return (
    <View className='flex-1'>
      <MapScreen 
        userLatitude={userLatitude as number}
        userLongitude={userLongitude as number}
      
      />
    </View>
      
    );
};




export default MapTab;