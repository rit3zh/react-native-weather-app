export interface SearchList {
  message: string;
  cod: string;
  count: number;
  list: List[];
}

export interface List {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  sys: Sys;
  rain: any;
  snow: any;
  clouds: Clouds;
  weather: Weather[];
}

interface Coord {
  lat: number;
  lon: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Sys {
  country: string;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
