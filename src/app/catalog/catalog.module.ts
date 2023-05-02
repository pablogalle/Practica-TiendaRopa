import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogSideMenuComponent } from './catalog-side-menu/catalog-side-menu.component';
import { CatalogProductsComponent } from './catalog-products/catalog-products.component';
import { CatalogProductInfoComponent } from './catalog-product-info/catalog-product-info.component';
import { CatalogProductPriceComponent } from './catalog-product-price/catalog-product-price.component';
import { ProductSizeChartComponent } from './product-size-chart/product-size-chart.component';



@NgModule({
  declarations: [
    CatalogComponent,
    CatalogSideMenuComponent,
    CatalogProductsComponent,
    CatalogProductInfoComponent,
    CatalogProductPriceComponent,
    ProductSizeChartComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
