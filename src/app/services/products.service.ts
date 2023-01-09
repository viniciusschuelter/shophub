import {Injectable} from "@angular/core";
import {filter} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {ProductInterface} from "../models/product.model";
import {defaultColorsSneakers} from "../utils/colors.helpers";


@Injectable({providedIn: 'root'})

export class ProductsService {

  private productsSubject = new BehaviorSubject<ProductInterface[]>([]);

  public readonly products$ = this.productsSubject.asObservable().pipe(filter(data => !!data));

  listColor: string[] = defaultColorsSneakers;

  getProducts():  ProductInterface[] {
    return this.productsSubject.getValue();
  }

  setProducts(products: ProductInterface[]): void {
    this.productsSubject.next(this.generateRandomRatingAndColor(products));
  }

  generateRandomRatingAndColor(products: ProductInterface[]): ProductInterface[] {
    return products.map( prd =>
      ({...prd,
        rating: Math.round(Math.random() * 5),
        color: this.listColor[Math.round(Math.random() * 3)]
      }));
  }

  sortProductsByDefault(): void {
    this.productsSubject.next(this.getProducts().sort((a, b) => a.id.localeCompare(b.id)));
  }

  sortProductsByName(): void {
    this.productsSubject.next(this.getProducts().sort((a, b) => a.name.localeCompare(b.name)));
  }

  sortProductsByRating(): void {
    this.productsSubject.next(this.getProducts().sort((a, b) => a.rating - b.rating));
  }
}
