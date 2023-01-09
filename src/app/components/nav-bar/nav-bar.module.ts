import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./nav-bar.component";
import {MenuBarModule} from "../menu-bar/menu-bar.module";
import {RouterModule} from "@angular/router";
import {AnimatedButtonComponent} from "../animated-button/animated-button.component";


@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [
    CommonModule,
    MenuBarModule,
    RouterModule,
    AnimatedButtonComponent
  ]
}) export class NavBarModule{};
