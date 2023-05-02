import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Banner } from 'src/app/interfaces/banner.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerBanners(): Observable<Banner[]> {
    const urlEndPoint: string = "http://localhost:3002/banners";

    return this.http.get<Banner[]>(urlEndPoint);
  }
}
