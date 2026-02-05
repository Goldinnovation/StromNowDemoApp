import getChargeStationsAPI, { ChargeStation } from '@/api/getChargeStationsAPI';
import handleUserLocation from '@/handler/handleUserLocation';
import { useEffect, useState } from 'react';

const useMapHook = () => {
  const [userLatitude, setUserLatitude] = useState<number | undefined>(undefined);
  const [userLongitude, setUserLongitude] = useState<number | undefined>(undefined);
  const [chargeStations, setChargeStations] = useState<ChargeStation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get user location
        const userLocation = await handleUserLocation();
        const latitude = userLocation?.latitude as number;
        const longitude = userLocation?.longitude as number;

        setUserLatitude(latitude);
        setUserLongitude(longitude);

        // Fetch charge stations
        if (latitude && longitude) {
          const response = await getChargeStationsAPI(latitude, longitude);

          console.log('response', response);
          setChargeStations(response.stations);
        }
      } catch (err) {
        console.error('Error initializing map:', err);
        setError(err instanceof Error ? err.message : 'Failed to initialize map');
      } finally {
        setIsLoading(false);
      }
    };

    initializeMap();
  }, []);

  return {
    userLatitude,
    userLongitude,
    chargeStations,
    isLoading,
    error,
  };
};

export default useMapHook;
