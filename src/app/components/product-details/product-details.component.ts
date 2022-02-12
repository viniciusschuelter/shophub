import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {pipe, map, combineLatest} from "rxjs";
import {CartService} from "../../services/cart.service";
import {ProductInterface} from "../../models/product.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<ProductInterface | undefined> = combineLatest([
    this.activatedRoute.params,
    this.productsService.products$
  ]).pipe(
    map(([params, products]) => products.find( prd => prd.id === params['productId']))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public cartService: CartService
  ) {

  }

  ngOnInit(): void {
  }

  addToCart(prd: ProductInterface): void {
    this.cartService.addToCart({productId: prd.id, quantity: 1, color: 'red', size: 37})
  }
}
