import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-float-buttons',
  template: `
    <app-animated-button class="absolute bottom-4 left-6 z-20">
      <img class="w-6" src="../../../assets/icons/icon-search.svg">
    </app-animated-button>
    <app-animated-button class="absolute bottom-4 right-6 z-20" (click)="goToContact()">
      <img class="w-6" src="../../../assets/icons/icon-message.svg">
    </app-animated-button>
  `,

})
export class FloatButtonsComponent {

  constructor(
    private router: Router
  ) { }


  goToContact(): void {
    this.router.navigateByUrl(`contact`);
  }
}
