import getChargeStationsAPI from '@/api/getChargeStationsAPI';
import handleUserLocation from '@/handler/handleUserLocation';
import FlashbackMessageUtils from '@/utils/FlashbackMessageComponent';
import Mapbox from '@rnmapbox/maps';
import { useEffect, useState } from 'react';




const ACCESS_TOKEN = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
Mapbox.setAccessToken(ACCESS_TOKEN);


interface ChargeStation {
  data: {
    stationAround: any[];
  }
}

const useMapHook = () => {
  const [userLatitude, setUserLatitude] = useState<number | undefined>(undefined);
  const [userLongitude, setUserLongitude] = useState<number | undefined>(undefined);
  const [chargeStations, setChargeStations] = useState<any[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [flashback, setFlashback] = useState<boolean>(false);
  const [flashbackStatus, setFlashbackStatus] = useState<string | null>(null);
  const [flashbackMessage, setFlashbackMessage] = useState<string>('');

  useEffect(() => {
    const initializeMap = async () => {
      try {
        setIsLoading(true);
     ;
      

        // Get user location
        const userLocation = await handleUserLocation();
        const latitude = userLocation?.latitude as number;
        const longitude = userLocation?.longitude as number;

        setUserLatitude(latitude);
        setUserLongitude(longitude);

        // Fetch charge stations
        if (latitude && longitude) {
          const response = await getChargeStationsAPI(latitude, longitude);

          if(response) {
            const stationData  = JSON.stringify(response, null, 2)
            const parsedData = JSON.parse(stationData).data.stationAround;
            setChargeStations(parsedData);
            FlashbackMessageUtils({
              status: 'success',
              message: 'Welcome to the StromNow',
              setFlashback,
              setFlashbackStatus,
              setFlashbackMessage,
            });
          } else {
            FlashbackMessageUtils({
              status: 'error',
              message: 'Failed to fetch charge stations. Please try again later.',
              setFlashback,
              setFlashbackStatus,
              setFlashbackMessage,
            });
          }


          
        }
      } catch (err) {

        FlashbackMessageUtils({
          status: 'error',
          message: 'Failed to initialize map',
          setFlashback,
          setFlashbackStatus,
          setFlashbackMessage,
        });
      } finally {
        setIsLoading(false);
      }
    };

    initializeMap();
  }, []);


  return {
    userLatitude,
    userLongitude,
    isLoading,
    flashback,
    flashbackStatus,
    flashbackMessage,
    Mapbox, 
    chargeStations
  };
};

export default useMapHook;
