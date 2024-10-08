import { Component } from '@angular/core';
import { Category} from '../../types/category.type';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})
export class SidenavigationComponent {
categories:Category[] = [];
constructor(categoryService:CategoryService){
  // this.categories = categoryService.getAllCategories();
  categoryService.getAllCategories().subscribe((categories) =>{
    this.categories = categories;
  });
}

getCategories(parentCategoryID?:number):Category[]{
  return this.categories.filter((category) => parentCategoryID ? category.parent_category_id === parentCategoryID:
  category.parent_category_id === null);
}
}
