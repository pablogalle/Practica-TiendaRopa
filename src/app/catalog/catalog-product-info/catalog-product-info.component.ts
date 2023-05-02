import { Component, Input, OnInit } from '@angular/core';
import { ProductImpl } from 'src/app/implementations/product.model';
import { ProductInfoService } from './product-info.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-catalog-product-info',
  templateUrl: './catalog-product-info.component.html',
  styleUrls: ['./catalog-product-info.component.scss']
})
export class CatalogProductInfoComponent implements OnInit {

  product!: Product
  constructor(
    private productInfoService: ProductInfoService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let idProducto = this.route.snapshot.paramMap.get('id')
    this.obtenerProducto(idProducto!)
  }

  obtenerProducto(idProducto: string) {
    this.productInfoService.obtenerInfoProducto(idProducto).subscribe(
      (product : Product) => {
        this.product = new ProductImpl(product.id,product.name,product.category, product.price, product.discount, product.image)
      }
    )
  }
}


