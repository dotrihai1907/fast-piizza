import {
  ICreateOrderRequest,
  ICreateOrderResponse,
  IMenu,
  IOrder,
} from "./apiModel";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed getting menu");
  const { data } = await res.json();
  return data as IMenu[];
}

export async function getOrder(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);
  const { data } = await res.json();
  return data as IOrder;
}

export async function createOrder(newOrder: ICreateOrderRequest) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data as ICreateOrderResponse;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: unknown, updateObj: unknown) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
