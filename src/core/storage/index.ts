import AsyncStorage from "@react-native-async-storage/async-storage";
import * as constants from "#/index";

export async function getUser<T>(): Promise<string | undefined> {
  try {
    const responseCode = await AsyncStorage.getItem(
      constants.ASYNC_STORAGE_KEY satisfies string
    );
    return responseCode as string;
  } catch (error: any | void) {
    console.error({
      type: error?.name,
      message: error?.message,
      code: 401,
    });
    return undefined;
  }
}

export async function setUser<T>(id: string): Promise<boolean | void> {
  try {
    await AsyncStorage.setItem(
      constants.ASYNC_STORAGE_KEY satisfies string,
      id satisfies string
    );
    return true;
  } catch (error: any | void) {
    console.error({
      type: error?.name,
      message: error?.message,
      code: 401,
    });
    return undefined;
  }
}

export async function deleteUser<T>(): Promise<boolean | undefined> {
  try {
    await AsyncStorage.removeItem(constants.ASYNC_STORAGE_KEY satisfies string);
    return true;
  } catch (error: any | void) {
    console.error({
      type: error?.name,
      message: error?.message,
      code: 401,
    });
    return undefined;
  }
}
