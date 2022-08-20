import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
// ----------------------------------- Properties ------------------------------

  userProducts?: IProducts[];
  quantityArray: number[] = [];
  productPrice?: number;
  totalPrice: number[] = [];

// -----------------------------------------------------------------------------

  constructor( private productsCartService: CartProductsService ) {}

  ngOnInit() {
    this.userProducts = this.productsCartService.getCartProducts();
    this.setquantity();
  }

// ----------------------------------- Functions -------------------------------

  removeProduct( product: any ) {
    this.productsCartService.removeProduct( product.id )
    this.userProducts = this.productsCartService.getCartProducts();
  }

  getQuantity( value: any ) {
    this.number( value.value );
  }

  setquantity() {
    for( let i = 1; i < 11 ; i++ ) {
      this.quantityArray.push(i);
    };
  }

  number( value: string ) {
    return Number(value) || 1;
  }

}
