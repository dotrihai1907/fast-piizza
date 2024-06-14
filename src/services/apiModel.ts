export interface IError extends Error {
  data: string;
  error: string;
  internal: boolean;
  status: number;
  statusText: string;
}
export interface IMenu {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

export interface ICart {
  pizzaId: number;
  name: string;
  addIngredients?: string[];
  removeIngredients?: string[];
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface IOrder {
  id: string;
  cart: ICart[];
  customer: string;
  estimatedDelivery: string;
  orderPrice: number;
  priority: boolean;
  priorityPrice: number;
  status: string;
}

export interface ICreateOrderRequest {
  address: string;
  customer: string;
  phone: string;
  priority: boolean;
  cart: ICart[];
}

export interface ICreateOrderResponse extends IOrder, ICreateOrderRequest {}
