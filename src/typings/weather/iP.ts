export interface IpTypes {
  success: boolean;
  ip: string;
  type: string;
  country: Country;
  region: string;
  city: string;
  location: Location;
  timeZone: string;
  asn: Asn;
}

export interface Country {
  code: string;
  name: string;
}

export interface Location {
  lat: number;
  lon: number;
}

export interface Asn {
  number: number;
  name: string;
  network: string;
}
