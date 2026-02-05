import axios from "axios";

const BASE_URL = "https://api.chargetrip.io/graphql";
const X_CLIENT_ID = process.env.EXPO_PUBLIC_X_CLIENT_ID as string;
const X_App_ID = process.env.EXPO_PUBLIC_X_App_ID as string;


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
): Promise<any> => {
  try {
    const response = await axios.post(
      BASE_URL, // Don't add /charge-stations - GraphQL has one endpoint
      {
        query: `
          query stationAround{
            stationAround(
              filter: {
            location: {type: Point, coordinates: [${longitude}, ${latitude}]}
            distance: 5000
            power_groups: [fast, turbo]
            amenities: [supermarket]
                         }
                    size: 3
                    page: 0
                ) {
              id
              name
              location {
                type
                coordinates
              }
              elevation
              physical_address {
              continent
              country
              county
              city
              street
              number
              postal_code
              what_3_words
              formatted_address
            }
            amenities
            power
            }
          }
        `,
        variables: {
          location: {
            type: "Point",
            coordinates: [longitude, latitude], // GraphQL expects [lng, lat]
          },
          distance: radius / 1000, // Convert meters to km if API uses km
        },
      },
      {
        headers: {
          "x-client-id": X_CLIENT_ID,
          "x-app-id": X_App_ID,
          "Content-Type": "application/json",
        },
      }
    );


   
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || "Failed to fetch charge stations"
      );
    }
    throw error;
  }
};

export default getChargeStationsAPI;
