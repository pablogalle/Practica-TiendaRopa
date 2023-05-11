import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogProductsService {
  constructor(
    private http: HttpClient
  ) { }

  public obtenerProductos(): Observable<Product[]> {
    const urlEndPoint: string = "http://localhost:3002/products";

    return this.http.get<Product[]>(urlEndPoint);
  }
}
