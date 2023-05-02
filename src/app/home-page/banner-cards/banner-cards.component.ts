import { Component, OnInit } from '@angular/core';
import { BannerCardsService } from './banner-cards.service';
import { Banner } from 'src/app/interfaces/banner.interface';
import { BannerImpl } from 'src/app/implementations/banner.model';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner-cards',
  templateUrl: './banner-cards.component.html',
  styleUrls: ['./banner-cards.component.scss']
})
export class BannerCardsComponent implements OnInit{

  faArrow = faArrowRight
  bannerCards: Banner[] = []
  constructor(
    private bannerCardsService: BannerCardsService
  ){}

  ngOnInit(): void {
    this.obtenerBanners();
  }
  obtenerBanners() {
    this.bannerCardsService.obtenerBanners().subscribe(
      (data) => {
        data.forEach( (banner) => {
          const bannerImport: Banner = new BannerImpl(banner.title, banner.image)
          this.bannerCards.push(bannerImport);
        }
        )
      }
    )
  }
}
