import {ProductInterface} from "./product.model";


export enum CartSortEnum  {
  default = 'Default sorting',
  name = 'Sort by name',
  rating = 'Sort by rating'
}

export class CartModel {
  id?: string;
  userId?: string;
  createdAt?: string | Date;
  orderProducts?: CartProductOrder[] = []
}

export interface CartProductOrder extends ProductInterface {
  color: string;
  size: number;
  quantity: number
}
