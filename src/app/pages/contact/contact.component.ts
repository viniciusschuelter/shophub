import {Component, inject} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Component({
  standalone: true,
  selector: 'app-contact',
  template: `
    <form class="w-full max-w-lg mx-auto bg-orange-100 p-7 rounded-2xl">
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input class="appearance-none block w-full bg-yellow-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-50" id="grid-first-name" type="text" placeholder="Jane">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input class="appearance-none block w-full bg-yellow-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-yellow-50 focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            E-mail
          </label>
          <input class="appearance-none block w-full bg-yellow-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-50 focus:border-gray-500" id="email" type="email">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-3">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Message
          </label>
          <textarea class=" no-resize appearance-none block w-full bg-yellow-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-yellow-50 focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button class="bg-gray-900 hover:bg-gray-800 rounded-xl px-8 py-3" (click)="sendEmail()">
            <span class="text-yellow-400 font-medium">Send</span>
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
  `
})
export class ContactComponent  {
  toastr = inject(ToastrService);

  sendEmail(): void {
    this.toastr.success('This product is added to your cart', 'Successful');
  }
}
