import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService]
})
export class ProductsComponent {
  products: ProductListItem[]=[];
  constructor(productService: ProductsService){
    this.products = productService.getProductList();
  }
}
