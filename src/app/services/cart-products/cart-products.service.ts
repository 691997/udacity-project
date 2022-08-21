import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from 'src/app/interface/products';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
// ----------------------------------- Properties ------------------------------

  userProductsCart: IProducts[] = [];

// -----------------------------------------------------------------------------

  constructor( private http: HttpClient ) {}

// ----------------------------------- Functions -------------------------------

  // Add product to user cart products
  addProduct( product: IProducts ) {
    const isExist =  this.userProductsCart.filter( data => {
      return data.id == product.id;
    });

    if( isExist.length === 0 ) return this.userProductsCart.push( product );
    return;
  };


  // Get user cart products
  getCartProducts(){
    return this.userProductsCart;
  };


  // Remove product From to user cart products
  removeProduct( productId: number ) {
    this.userProductsCart = this.userProductsCart.filter( product => {
                              return product.id !== productId
                            });
  };
}
