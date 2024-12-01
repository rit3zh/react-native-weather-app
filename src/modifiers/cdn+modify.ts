import { IHookWeatherResponse } from "@/typings/weather/Weather";

interface IOptions {
  weather?: IHookWeatherResponse;
  search?: IHookWeatherResponse;
}

export function modify(iconId?: string) {
  const BASE_URL_4X: string = `${iconId}@4x.png`;
  return BASE_URL_4X;
}

export function flag(sys?: string) {
  return `https://flagsapi.com/${sys}/flat/64.png`;
}

export function image(options: IOptions): any | boolean {
  if (options?.search?.dtRaw) {
    if (options?.search?.weather?.icon?.raw === "10d") {
      return require("assets/clear_day.png");
    } else if (options?.search?.weather?.icon?.raw === "10n") {
      return require("assets/clear_night.png");
    } else {
      return false;
    }
  } else if (options.weather?.dtRaw) {
    if (options?.weather?.weather?.icon?.raw === "10d") {
      return require("assets/clear_day.png");
    } else if (options?.weather?.weather?.icon?.raw === "10n") {
      return require("assets/clear_night.png");
    } else {
      return false;
    }
  } else {
    return false;
  }
}
