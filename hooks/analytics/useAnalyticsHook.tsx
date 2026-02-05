import getChargeStationsAPI from "@/api/getChargeStationsAPI";
import handleUserLocation from "@/handler/handleUserLocation";
import FlashbackMessageUtils from "@/utils/FlashbackMessageComponent";
import { useEffect, useState } from "react";

const useAnalyticsHook = () => {
const [stationData, setStationData] = useState<any>(null)
const [isLoading, setIsLoading] = useState<boolean>(true);
const [flashback, setFlashback] = useState<boolean>(false);
const [flashbackStatus, setFlashbackStatus] = useState<string | null>(null);
const [flashbackMessage, setFlashbackMessage] = useState<string>('');

  const piewidthAndHeight = 70;

  useEffect(() => {
    const initializeAnalyticsData = async () => {
      try {
        // Get user location
        const userLocation = await handleUserLocation();
        const latitude = userLocation?.latitude as number;
        const longitude = userLocation?.longitude as number;

        if (latitude && longitude) {
          const response = await getChargeStationsAPI(latitude, longitude);

          if (response) {
            const stationData = JSON.stringify(response, null, 2);
            const parsedData = JSON.parse(stationData).data.stationAround;
            setStationData(parsedData);

            // Process power data for all stations
            const newPowerKeys: string[] = [];
            const newPowerValues: number[] = [];

            parsedData.forEach((station: any) => {
              if (station.power && typeof station.power === 'object') {
                Object.keys(station.power).forEach(powerKey => {
                  const available = station.power[powerKey]?.available;
                  if (available !== undefined) {
                    newPowerKeys.push(powerKey);
                    newPowerValues.push(Number(available) || 0);
                  }
                });
              }
            });
            setIsLoading(false);


            setFlashback(false);
            // FlashbackMessageUtils({
            //   status: null,
            //   message: '',
            //   setFlashback,
            //   setFlashbackStatus,
            //   setFlashbackMessage,
            // });

          }else{
            FlashbackMessageUtils({
              status: 'error',
              message: 'Failed to fetch charge stations. Please try again later.',
              setFlashback,
              setFlashbackStatus,
              setFlashbackMessage,
            });
          }
        }
      } catch (error) {
        console.error('Error initializing analytics:', error);
        FlashbackMessageUtils({
          status: 'error',
          message: 'Failed to fetch charge stations. Please try again later.',
          setFlashback,
          setFlashbackStatus,
          setFlashbackMessage,
        });
      }
    };

    initializeAnalyticsData();
  }, []);

  return {
    stationData,
    piewidthAndHeight,
    isLoading,
    flashback,
    flashbackStatus,
    flashbackMessage,
 
  };
};

export default useAnalyticsHook;