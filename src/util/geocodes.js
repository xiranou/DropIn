import { useState } from "react";
import { createClient } from "@google/maps";

export const useMapClient = () => {
  const [googleMapsClient] = useState(
    createClient({
      key: process.env.REACT_APP_MAP_KEY,
      Promise: Promise
    })
  );

  const getGeocode = async address => {
    try {
      const response = await googleMapsClient.geocode({ address }).asPromise();
      return response.json.results[0].geometry.location;
    } catch (error) {
      console.warn(error);
      return null;
    }
  };

  return [googleMapsClient, getGeocode];
};
