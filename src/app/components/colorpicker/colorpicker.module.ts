import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorpickerComponent} from './colorpicker.component';

@NgModule({
  declarations: [ColorpickerComponent],
  exports: [ColorpickerComponent],
  imports: [
    CommonModule
  ]
})
export class ColorpickerModule { }
