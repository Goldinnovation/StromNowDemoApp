import CarIcon from '@/assets/icons/carIcon';
import ChargingStationIcon from '@/assets/icons/chargingStationIcon';
import Mapbox from '@rnmapbox/maps';
import { StyleSheet } from 'react-native';

type MapboxComponentProps = {
  userLatitude?: number;
  userLongitude?: number;
  chargeStations?: any[];
  styleURL?: string;
  zoomLevel?: number;
  pitch?: number;
  Mapbox: any;
};

const MapboxComponent = ({
  userLatitude,
  userLongitude,
  chargeStations = [],
  styleURL = 'mapbox://styles/mapbox/navigation-night-v1',
  zoomLevel = 14,
  pitch = 0,
  Mapbox,
}: MapboxComponentProps) => {
  return (
    <Mapbox.MapView style={styles.map} styleURL={styleURL} pitchEnabled={true}>
      <Mapbox.Camera
        zoomLevel={zoomLevel}
        pitch={pitch}
        centerCoordinate={
          userLongitude && userLatitude
            ? [userLongitude, userLatitude]
            : [13.405, 52.52]
        }
      />

      {/* User current location marker */}
      {userLongitude && userLatitude && (
        <Mapbox.PointAnnotation
          id="userMarker"
          coordinate={[userLongitude, userLatitude]}
        >
          <CarIcon size={40} />
        </Mapbox.PointAnnotation>
      )}

      {/* Charging stations nearby */}
      {chargeStations &&
        chargeStations.length > 0 &&
        chargeStations.map((station, index) => (
          <Mapbox.PointAnnotation
            id={station.id}
            key={index.toString()}
            coordinate={[
              station.location.coordinates[0],
              station.location.coordinates[1],
            ]}
          >
            <ChargingStationIcon size={40} />
          </Mapbox.PointAnnotation>
        ))}
    </Mapbox.MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default MapboxComponent;
