export interface Resp {
  status: number | undefined;
  data: any;
}

export async function get(url: string): Promise<Resp> {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    return {
      status: undefined,
      data: { message: "An error occurred", error },
    };
  }
}
