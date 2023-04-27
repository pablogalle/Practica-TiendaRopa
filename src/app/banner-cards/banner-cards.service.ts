import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from '../interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerCardsService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerBanners(): Observable<Banner[]> {
    const urlEndPoint: string = "http://localhost:3002/card-banners";

    return this.http.get<Banner[]>(urlEndPoint);
  }
}
