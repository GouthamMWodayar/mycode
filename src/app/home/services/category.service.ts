import { Injectable } from '@angular/core';
import { categories } from '../sampleData/category.data';
import { Category } from '../types/category.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient ) { }

  getAllCategories() :Observable<Category[]> {
    return this,this.httpClient.get<Category[]>(
      'http://localhost:5001/productcategories'
    )
  }
}
