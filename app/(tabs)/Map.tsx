import { View, Text, StyleSheet } from 'react-native';




const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text className='text-white'>Map</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
    },
});

export default MapScreen;