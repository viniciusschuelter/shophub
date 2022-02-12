

export class CartModel {
  id?: string;
  userId?: string;
  createdAt?: string | Date;
  orderProducts?: CartProductOrder[] = []
}

export interface CartProductOrder {
  productId: string;
  color: string;
  size: number;
  quantity: number
}
