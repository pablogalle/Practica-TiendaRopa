import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { BannerCardsComponent } from './banner-cards/banner-cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent,
    CarouselComponent,
    BannerCardsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ]
})
export class HomePageModule { }
