import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import {heightFadeAnimation} from "../../animations/height-fade.animation";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [heightFadeAnimation]
})
export class NavBarComponent implements OnInit {

  collapsed = false;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  goToCart(): void {
    this.router.navigateByUrl(`shopping-cart`);
  }
}
