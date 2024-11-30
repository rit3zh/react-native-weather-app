import * as constants from "#/index";
import type { IPInformation } from "@/typings/weather/IP-Details";

export async function getCurrentIPAddressInformation(): Promise<IPInformation> {
  const request = await fetch(constants.IP_DATA_API, {
    method: constants.Methods.Get,
  });

  const response = await request.json();
  return response as IPInformation;
}
