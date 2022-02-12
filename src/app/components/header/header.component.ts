import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-header',
  template: `
    <div class="relative mx-10 z-0">
      <div class="header-background"></div>
      <div class="grid grid-cols-3 items-end justify-between relative p-12 pb-8">
        <app-breadcrumb class="col-span"></app-breadcrumb>
        <h1 class="col-span text-5xl text-center font-bold capitalize">
          {{(router.routerState.snapshot.url | replace: '/' : '') | split: '/'}}
        </h1>
        <div class="col-span">
          <div class="flex items-center justify-end font-small font-bold text-black">
            <span class="mr-3">Showing 1 - 100</span>
            <select class="form-select form-select-lg mb-3 appearance-none block pl-4 pr-8 font-semibold text-black mb-0 
              bg-amber-200 bg-clip-padding bg-no-repeat border border-solid border-gray-100 rounded-lg transition ease-in-out
              focus:border-orange-600 focus:outline-none"
                    aria-label=".form-select-lg example" (select)="productsService.sortProductsByRating()">
              <option selected (select)="productsService.sortProductsByDefault()">Default sorting</option>
              <option (select)="productsService.sortProductsByName()">Sort by name</option>
              <option (select)="productsService.sortProductsByRating()">Sort by rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .header-background {
      position: absolute;
      border-radius: 36px;
      height: 360px;
      width: 100%;
      background: linear-gradient(#ff8d3e 5%, #ffc107);
    }`
  ]
})
export class HeaderComponent {

  constructor(
    public router: Router,
    public productsService: ProductsService
  ) {
  }
}
