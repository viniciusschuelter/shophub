import {NgModule} from "@angular/core";
import {FloatButtonsComponent} from "./float-buttons.component";
import {CommonModule} from "@angular/common";
import {AnimatedButtonModule} from "../animated-button/animated-button.module";

@NgModule({
  declarations: [FloatButtonsComponent],
  exports: [FloatButtonsComponent],
  imports: [
    CommonModule,
    AnimatedButtonModule
  ]
}) export class FloatButtonsModule{};
