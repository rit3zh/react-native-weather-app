import type { CurrentWeather } from "@/packages";

export interface IHookWeatherResponse extends CurrentWeather {
  city?: string;
  region?: string;
}
