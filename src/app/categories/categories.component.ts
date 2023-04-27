import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Category } from '../interfaces/category.interface';
import { CategoryImpl } from '../implementations/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  categories: Category[] = []
  constructor(
    private categoriesService:CategoriesService
  ){}


  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.categoriesService.obtenerCategorias().subscribe(
      (data) => {
        data.forEach( (category) => {
          const categoryImport: Category = new CategoryImpl(category.name, category.amount, category.image)
          this.categories.push(categoryImport);
        })
      }
    )
  }

}
