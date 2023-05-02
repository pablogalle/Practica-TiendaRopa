import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-size-chart',
  templateUrl: './product-size-chart.component.html',
  styleUrls: ['./product-size-chart.component.scss']
})
export class ProductSizeChartComponent {
  @Input("sizesArray")
  sizes:boolean[] = []

  @Input("category")
  category:string = ""

  

}
