import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  constructor(
    private http: HttpClient
  ) { }
  
  public obtenerInfoProducto(id: string): Observable<Product> {
    const urlEndPoint: string = "http://localhost:3002/products/"+id;

    return this.http.get<Product>(urlEndPoint);
  }
}
