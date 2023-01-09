import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-animated-button',
  template: `
    <span class="animated-button cursor-pointer hover:animate-bounce relative">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
  .animated-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 4px solid #fff;
    }
  `]

})
export class AnimatedButtonComponent { }
