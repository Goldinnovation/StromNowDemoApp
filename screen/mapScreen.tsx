import FlashbackComponent from '@/components/flashback/FlashbackComponent';
import MapboxComponent from '@/components/map/MapboxComponent';
import { StyleSheet, View } from 'react-native';

interface MapScreenProps {
  userLatitude?: number;
  userLongitude?: number;
  chargeStations?: any[];
  flashback: boolean;
  flashbackStatus: string | null;
  flashbackMessage: string;
  Mapbox: any;
}

const MapScreen = ({
  userLatitude,
  userLongitude,
  chargeStations,
  Mapbox,
  flashback,
  flashbackStatus,
  flashbackMessage,
}: MapScreenProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <FlashbackComponent
          visible={flashback}
          status={flashbackStatus}
          message={flashbackMessage}
        />

        <MapboxComponent
          Mapbox={Mapbox}
          userLatitude={userLatitude}
          userLongitude={userLongitude}
          chargeStations={chargeStations}
          styleURL="mapbox://styles/mapbox/navigation-night-v1"
          zoomLevel={14}
          pitch={0}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'relative',
    },
    map: {
        flex: 1,
        // backgroundColor: 'red',
        height: '100%',
        width: '100%',
    }
});



export default MapScreen;