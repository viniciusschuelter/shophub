import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ProductInterface} from "./models/product.model";
import * as productsJson from './mocks/procucts.json'
import {ProductsService} from "./services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private subscriber: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private productsService: ProductsService,
    public router: Router
  ) {
    this.init();
  }

  init(): void {
    // @ts-ignore
    this.productsService.setProducts(productsJson?.default);
    this.subscriber.add(
      this.http.get<ProductInterface>('http://localhost:4200/app/mocks/products.json').subscribe(products => {
      })
    )
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
