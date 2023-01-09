import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <div class="md:flex justify-between py-14 px-10 bg-orange-100 text-gray-700 rounded-3xl mx-5">
      <div class="md:w-1/2 mb-10 md:mb-0">
        <h2 class="text-2xl md:text-4xl lg:text-6xl text-violet-700 mb-6 font-bold">Welcome to shophub!</h2>
        <p class="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book
        </p>
        <button class="inline-block py-3 px-6 mr-4 w-100 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 rounded mr-2"
                (click)="goToBlog()">
          Learn More
        </button>
        <button class="inline-block py-3 px-6 mr-4 w-100 text-lg bg-red-400 text-red-800 hover:bg-red-300 rounded"
                (click)="goToShop()">
          Go To Shop
        </button>
      </div>
      <div class="md:w-1/2">
        <img
          src="https://image.goat.com/375/attachments/product_template_pictures/images/067/070/950/original/DJ0335_067.png.png"
          alt="Air Jordan 1 Mid SE TD 'Motorsport'" class="mx-auto">
      </div>
    </div>
  `
})
export class HomeComponent {
  router = inject(Router)

  goToShop(): void {
    this.router.navigateByUrl(`products`);
  }

  goToBlog(): void {
    this.router.navigateByUrl(`blog`);
  }
}
