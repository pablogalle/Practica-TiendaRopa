import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-product-price',
  templateUrl: './catalog-product-price.component.html',
  styleUrls: ['./catalog-product-price.component.scss']
})
export class CatalogProductPriceComponent {
@Input("discount") discount : number = 0
@Input("price") price : number = 0


}
