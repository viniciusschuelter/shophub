import {NgModule} from "@angular/core";
import {MenuBarComponent} from "./menu-bar.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [MenuBarComponent],
  exports: [MenuBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
}) export class MenuBarModule{};
