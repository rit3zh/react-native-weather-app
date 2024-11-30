import { weather } from "@/instance";
import { useState, useLayoutEffect } from "react";
import type { CurrentWeather } from "@/packages";

import { getCurrentIPAddressInformation } from "@/helpers/getCurrentIPInformation";

interface IHookWeatherResponse extends CurrentWeather {
  city?: string;
  region?: string;
}

export function useCurrentWeather(interval?: any) {
  const [currentWeather, setCurrentWeather] =
    useState<IHookWeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useLayoutEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const currentInformation = await getCurrentIPAddressInformation();
        return currentInformation;
      } catch (error: any | void) {
        console.error(error?.message, 401);
      }
    };

    const getCurrentWeather = async () => {
      const data = await getCurrentLocation();

      if (data) {
        try {
          const weatherResponse = await weather.getCurrent({
            locationName: data.city,
            units: "metric",
          });
          setCurrentWeather({
            city: data?.city,
            region: data?.region,
            ...weatherResponse,
          });
        } catch (error) {
          console.error("Failed to fetch weather:", error);
          setError("Failed to fetch weather.");
        }
      } else {
        setError("Invalid location data.");
      }
    };

    getCurrentWeather();
  }, []);

  return { ...currentWeather };
}
