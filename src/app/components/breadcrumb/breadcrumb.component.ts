import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  template: `
    <div class="flex items-center font-bold text-black">
      <span class="text-white">Home</span>
      <span class="mx-2">/</span>
      <span class="capitalize">{{(router.routerState.snapshot.url | replace: '/' : '') | split: '/'}}</span>
    </div>
  `,

})
export class BreadcrumbComponent {

  constructor(
    public router: Router
  ) { }

}
