import { Component, OnInit } from '@angular/core';
import {MenuBarMock, MenuItem} from "../../models/menu.model";

@Component({
  selector: 'app-menu-bar',
  template: `
    <div class="flex items-center">
      <h4 *ngFor="let item of listMenu" class="px-4 font-bold text-xl cursor-pointer hover:animate-pulse"
          [routerLink]="item.url" routerLinkActive="text-[#ff8d3e]">
        {{item.name}}
      </h4>
    </div>
  `,

})
export class MenuBarComponent implements OnInit {

  listMenu: MenuItem[] = MenuBarMock;

  constructor() { }

  ngOnInit(): void {
  }

}
