import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
// -------------------------------------- Properties ------------------------------

  products?: IProducts[];

// --------------------------------------------------------------------------------

  constructor(  private _productsData: ProductsService,
                private router: Router,
              ) {}

  ngOnInit() {
    this._productsData.getProductsData().subscribe({
      next: data => this.products = data,
      error: error => alert('Servar Error')
    });

  }

// -------------------------------------- Functions ------------------------------

}
