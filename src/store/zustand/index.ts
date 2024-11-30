import type { List } from "@/typings/search/SearchWeather";
import { create } from "zustand";

interface WeatherStore {
  selectedItem: List | null;
  setSelectedItem: (item: List) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));
