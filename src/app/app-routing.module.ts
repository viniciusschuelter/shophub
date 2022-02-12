import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products-routing.module').then(m => m.ProductsRoutingModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog-routing.module').then(m => m.BlogRoutingModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact-routing.module').then(m => m.ContactRoutingModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./pages/shopping-cart/shopping-cart-rounting.module').then(m => m.ShoppingCartRountingModule)
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
