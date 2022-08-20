import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartComponent } from '../../components/cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button/back-button.component';
import { AddProductButtonComponent } from './add-product-button/add-product-button.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductCardComponent,
    LandingPageComponent,
    CartComponent,
    ProductDetailsComponent,
    BackButtonComponent,
    AddProductButtonComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ ]
})
export class ProductsModule { }
