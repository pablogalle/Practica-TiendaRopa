import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInfo } from 'src/app/interfaces/productInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService{

  constructor(
    private http : HttpClient
  ) { }

  public obtenerInfoProducto(id: number): Observable<ProductInfo> {
    const urlEndPoint: string = "http://localhost:3002/product/"+id;

    return this.http.get<ProductInfo>(urlEndPoint);
  }
}
