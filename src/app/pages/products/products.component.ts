import {Component, inject} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductCardModule} from "../../components/product-card/product-card.module";
import {AsyncPipe, NgFor} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [NgFor, AsyncPipe, ProductCardModule],
  template: `
    <div class="flex flex-wrap grow px-5">
      <app-product-card *ngFor="let product of productsService.products$ | async" class="pl-5 pb-5"
                        [product]="product"
      ></app-product-card>
    </div>
  `
})
export class ProductsComponent {
  productsService = inject(ProductsService);
}
