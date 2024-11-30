import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
};

export const INTRO_TITLE: string = "Weather";
export const INTRO_TITLE_DESC: string = "App";
export const INTRO_SUBTITLE: string = `A very basic Weather app made using React Native, to know your weather via your current location or lookup location.`;
export const ASYNC_STORAGE_KEY: string = `user`;
export const CONTENT_UNAVAILABLE_TITLE_NO_SEARCH_HISTORY: string = `No Search History Found`;
export const CONTENT_UNAVAILABLE_DESCRIPTION_NO_SEARCH_HISTORY: string = `Your recent searches will appear here. Start exploring to see your search history!`;
