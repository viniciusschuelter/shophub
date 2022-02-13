import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarModule} from "./components/nav-bar/nav-bar.module";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "./components/header/header.module";
import {FloatButtonsModule} from "./components/float-buttons/float-buttons.module";
import {FullscreenOverlayContainer, OverlayContainer} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    HttpClientModule,
    HeaderModule,
    FloatButtonsModule,
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
