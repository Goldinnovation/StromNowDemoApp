import { View, Text, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';



Mapbox.setAccessToken('<YOUR_ACCESSTOKEN>');

const MabTab = () => {
    return (
        <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
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
      height: 300,
      width: 300,
    },
    map: {
      flex: 1
    }
  });



export default MabTab;