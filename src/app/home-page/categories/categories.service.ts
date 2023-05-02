import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  constructor(
    private http: HttpClient
  ) { }


  public obtenerCategorias(): Observable<Category[]> {
    const urlEndPoint: string = "http://localhost:3002/categories";

    return this.http.get<Category[]>(urlEndPoint);
  }

}
