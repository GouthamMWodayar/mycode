import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductList(): ProductListItem[] {
    return products;
  }
}
