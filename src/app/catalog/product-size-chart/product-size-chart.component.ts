import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-size-chart',
  templateUrl: './product-size-chart.component.html',
  styleUrls: ['./product-size-chart.component.scss']
})
export class ProductSizeChartComponent{
  
  @Input("sizesArray")
  sizes:boolean[] = []

  @Input("category")
  category:string = ""

  shoeSizes : number[] = [37,38,39,40,41,42,43,44,45,46]

  clotheSizes : string[] =["XXS","XS","S","M","L","XL","XXL"]
  

}
