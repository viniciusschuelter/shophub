import {NgModule} from "@angular/core";
import {AnimatedButtonComponent} from "./animated-button.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AnimatedButtonComponent],
  exports: [AnimatedButtonComponent],
  imports: [
    CommonModule
  ]
}) export class AnimatedButtonModule{};
