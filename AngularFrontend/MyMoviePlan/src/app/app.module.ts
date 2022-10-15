import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SearchComponent,
    CheckoutComponent,
    LogoutComponent,
    CartComponent,
    ItemDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'search', component: SearchComponent},
      {path: 'cart', component: CartComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
