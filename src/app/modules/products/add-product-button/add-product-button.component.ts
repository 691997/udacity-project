import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/interface/products';
import { CartProductsService } from 'src/app/services/cart-products/cart-products.service';

@Component({
  selector: 'app-add-product-button',
  templateUrl: './add-product-button.component.html',
  styleUrls: ['./add-product-button.component.scss']
})
export class AddProductButtonComponent implements OnInit {
// ----------------------------------- Properties ------------------------------

  @Input() product?: IProducts;

// -----------------------------------------------------------------------------

  constructor( private productsCartService: CartProductsService ) { }

  ngOnInit() {
  }

// ----------------------------------- Functions -------------------------------

  addProduct() {
    this.productsCartService.addProduct( this.product! );
  }

}
