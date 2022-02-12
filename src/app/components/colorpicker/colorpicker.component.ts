import {Component, EventEmitter, Input, Output} from '@angular/core';
import {defaultColorsSneakers} from "../../utils/colors.helpers";

@Component({
  selector: 'app-colorpicker',
  host: {class: 'd-block'},
  template: `
    <div class="flex flex-nowrap items-center">
      <div *ngFor="let colorItem of listColor"
           class="rounded-full ring-2 ring-gray-200 w-6 h-6 mr-4 {{colorItem}}"
           [ngClass]="{'cursor-pointer': editable, 'ring-4 ring-yellow-300': color === colorItem}"
           (click)="changeColor(colorItem)">
      </div>
    </div>
  `
})
export class ColorpickerComponent {

  @Input() color = '';
  @Input() editable = true;
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  listColor: string[] = defaultColorsSneakers;

  constructor() {
  }

  changeColor(color: string): void {
    if (!this.editable) {
      return;
    }
    this.colorChange.emit(color);
  }
}
