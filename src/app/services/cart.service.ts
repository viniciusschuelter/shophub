import {Injectable} from "@angular/core";
import {filter} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {ProductInterface} from "../models/product.model";
import {CartModel, CartProductOrder} from "../models/cart.model";


@Injectable({providedIn: 'root'})

export class CartService {

  private cartSubject = new BehaviorSubject<CartModel>({});

  public readonly cart$ = this.cartSubject.asObservable().pipe(filter(data => !!data));


  getCart(): CartModel {
    return this.cartSubject.getValue();
  }

  addToCart(product: CartProductOrder): void {
    const cart = this.getCart();
    if (cart.orderProducts?.find(prd => prd.id === product.id)) {
      cart.orderProducts?.map(prd => {
        if (prd.id === product.id) {
          prd.quantity += 1;
          this.cartSubject.next(cart);
        }
      })
    } else {
      cart.orderProducts = cart.orderProducts?.length ? cart.orderProducts : [];
      cart.orderProducts.push(product);
      this.cartSubject.next({id: 'idCartTest', userId: 'idUsertTest', orderProducts: cart.orderProducts})
    }
  }

  removeOneFromCart(product: CartProductOrder): void {
    const cart = this.getCart();
    // @ts-ignore
    if (cart.orderProducts?.find(prd => prd.id === product.id)?.quantity > 1) {
      cart.orderProducts?.map(prd => {
        if (prd.id === product.id) {
          prd.quantity -= 1;
          this.cartSubject.next(cart);
        }
      })
    } else {
      this.removeFromCart(product);
    }
  }

  removeFromCart(product: CartProductOrder): void {
    const cart = this.getCart();
    cart.orderProducts = cart.orderProducts?.filter(prd => prd.id !== product.id)
    this.cartSubject.next(cart);
  }

}
