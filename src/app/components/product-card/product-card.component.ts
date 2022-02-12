import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // @ts-ignore
  @Input() product: ProductInterface;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToProductDetails(): void {
    this.router.navigateByUrl(`products/${this.product.id}`);
  }
}
