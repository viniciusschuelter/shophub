import {NgModule} from "@angular/core";
import {FloatButtonsComponent} from "./float-buttons.component";
import {CommonModule} from "@angular/common";
import {AnimatedButtonComponent} from "../animated-button/animated-button.component";

@NgModule({
  declarations: [FloatButtonsComponent],
  exports: [FloatButtonsComponent],
  imports: [
    CommonModule,
    AnimatedButtonComponent
  ]
}) export class FloatButtonsModule{};
