import type { SearchList } from "@/typings/search/SearchWeather";

export async function search(query: string): Promise<SearchList> {
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&units=metric`
  );
  const response = (await request.json()) as SearchList;
  console.log(response, "response");
  return response;
}
