import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  subscriber: Subscription = new Subscription();
  rerender = false;

  constructor(
    public cartService: CartService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    //TODO: workaround pipe dont detect change from observable, try to better solution
    this.subscriber.add(
      this.cartService.cart$.subscribe(a => {
        this.rerender = true;
        this.cd?.detectChanges();
        this.rerender = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
