export interface CupcakeProps {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export interface AccessoryProps {
  id: number;
  name: string;
  slug: string;
}

export async function getAllCupcakes(): Promise<CupcakeProps[]> {
  try {
    const response = await fetch("http://localhost:3310/api/cupcakes");
    const dataReceived = await response.json();

    return new Promise<CupcakeProps[]>((resolve) => resolve(dataReceived));
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Promise<CupcakeProps[]>((_resolve, reject) =>
        reject(`${error.name}: ${error.message}`),
      );
    }
    return new Promise<CupcakeProps[]>((_resolve, reject) =>
      reject("Unknown error"),
    );
  }
}

export async function getAllAccessories(): Promise<AccessoryProps[]> {
  try {
    const response = await fetch("http://localhost:3310/api/accessories");
    const dataReceived = await response.json();

    return new Promise<AccessoryProps[]>((resolve) => resolve(dataReceived));
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Promise<AccessoryProps[]>((_resolve, reject) =>
        reject(`${error.name}: ${error.message}`),
      );
    }
    return new Promise<AccessoryProps[]>((_resolve, reject) =>
      reject("Unknown error"),
    );
  }
}
