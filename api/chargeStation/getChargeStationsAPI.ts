import axios from 'axios';

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://api.example.com';

export type ChargeStation = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address?: string;
  available?: boolean;
  connectorTypes?: string[];
  power?: number;
};

export type GetChargeStationsResponse = {
  stations: ChargeStation[];
  total: number;
};

/**
 * Fetches charge stations from the API
 * @param latitude - User's latitude
 * @param longitude - User's longitude
 * @param radius - Search radius in meters (default: 5000)
 * @returns Promise with charge stations data
 */
export const getChargeStationsAPI = async (
  latitude: number,
  longitude: number,
  radius: number = 5000
): Promise<GetChargeStationsResponse> => {
  try {
    const response = await axios.get<GetChargeStationsResponse>(
      `${BASE_URL}/charge-stations`,
      {
        params: {
          lat: latitude,
          lng: longitude,
          radius,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('API Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to fetch charge stations');
    }
    throw error;
  }
};

export default getChargeStationsAPI;
