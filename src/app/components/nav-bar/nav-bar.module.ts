import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./nav-bar.component";
import {MenuBarModule} from "../menu-bar/menu-bar.module";
import {RouterModule} from "@angular/router";
import {AnimatedButtonModule} from "../animated-button/animated-button.module";


@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [
    CommonModule,
    MenuBarModule,
    RouterModule,
    AnimatedButtonModule
  ]
}) export class NavBarModule{};
