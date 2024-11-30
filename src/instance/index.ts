import { OpenWeatherAPI } from "packages/index";

export const weather = new OpenWeatherAPI({
  key: process.env.EXPO_PUBLIC_WEATHER_API_KEY,
});
