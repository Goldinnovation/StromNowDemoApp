import { View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import MarkerIcon from '@/assets/icons/markerIcon';




interface MapScreenProps {
    userLatitude: number;
    userLongitude: number;
    
}



const MapScreen = ({
  userLatitude,
  userLongitude,
}: MapScreenProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* <Mapbox.MapView style={styles.map}  />
         */}

        <Mapbox.MapView
          style={styles.map}
          styleURL="mapbox://styles/mapbox/navigation-day-v1"
          pitchEnabled={true}
        >
          <Mapbox.Camera
            zoomLevel={14}
            pitch={0}
            centerCoordinate={
              userLongitude && userLatitude
                ? [userLongitude, userLatitude]
                : [13.405, 52.52] // fallback (Berlin)
            }
          />

          {/* User location marker */}
          {userLongitude && userLatitude && (
            <Mapbox.PointAnnotation
              id="userMarker"
              coordinate={[userLongitude, userLatitude]}
            >
              <MarkerIcon size={40} />
            </Mapbox.PointAnnotation>
          )}
        </Mapbox.MapView>
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
    },
    map: {
      flex: 1,
      // backgroundColor: 'red',
      height: '100%',
      width: '100%',
    }
  });



export default MapScreen;