import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog-product-info',
  templateUrl: './catalog-product-info.component.html',
  styleUrls: ['./catalog-product-info.component.scss']
})
export class CatalogProductInfoComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    obtenerInfoProducto(this.route.snapshot.paramMap.get("id")!);
  }

}

function obtenerInfoProducto(id: string | null) {
  
}

