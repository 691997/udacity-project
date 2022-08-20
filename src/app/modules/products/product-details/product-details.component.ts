import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/interface/products';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
// ----------------------------------- Properties ------------------------------

productId: any;
product?: IProducts;

// -----------------------------------------------------------------------------

  constructor( private route: ActivatedRoute,
               private productsList: ProductsService,
             ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productsList.getProductsData().subscribe( data => {
      data.filter( (product: any) => {
        if( product.id == this.productId ) return this.product = product;
      })
    });
  }

// ----------------------------------- Functions -------------------------------


}
