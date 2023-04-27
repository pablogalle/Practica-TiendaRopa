import { Component, OnInit } from '@angular/core';
import { Banner } from '../interfaces/banner.interface';
import { CarouselService } from './carousel.service';
import { BannerImpl } from '../implementations/banner.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  banners: Banner[] = []

  constructor(
    private carouselService: CarouselService
  ){}

  ngOnInit(
  ): void {
    this.obtenerImagenesBanners();
  }
  obtenerImagenesBanners() {
    this.carouselService.obtenerBanners().subscribe(
      (data) => {
        data.forEach( (banner) => {
          const bannerImport: Banner = new BannerImpl(banner.title, banner.image)
          this.banners.push(bannerImport);
        }
        )
      }
    )
  }

}
