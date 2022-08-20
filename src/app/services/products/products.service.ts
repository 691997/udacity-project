import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../../interface/products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
// ----------------------------------- Properties ------------------------------

  url: string = 'assets/products.json';

// -----------------------------------------------------------------------------

  constructor( private http: HttpClient ) {}

// ----------------------------------- Functions -------------------------------

  // Git All Products Data
  getProductsData(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>( this.url );
  };

}

