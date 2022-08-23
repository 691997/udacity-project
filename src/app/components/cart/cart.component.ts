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

  userProducts: IProducts[] = [];
  quantity: number = 0;
  totalQuantityPrice : number[] = []; 
  total: number = 0;

// -----------------------------------------------------------------------------

  constructor( private productsCartService: CartProductsService ) {}

  ngOnInit() {
    this.userProducts = this.productsCartService.getCartProducts();
    this.getTotal( this.userProducts[0]);
  }

// ----------------------------------- Functions -------------------------------

  submittedSuccess( message: any) {
    alert( message );
  }

  removeProduct( product: any ) {
    this.productsCartService.removeProduct( product.id )
    this.userProducts = this.productsCartService.getCartProducts();
    this.getTotal( product );
    alert(' Product is removed Success ');
  }

  number( value: string ) {
    return Number(value) || 1;
  }

  getTotal( product: any) {
    product.total = product.quantity * product.price
    this.totalQuantityPrice = [];

    this.userProducts.forEach( item => {
      this.totalQuantityPrice.push( item.total );
      this.total = this.totalQuantityPrice.reduce( (a , b) => a + b );
    })
  }
}
