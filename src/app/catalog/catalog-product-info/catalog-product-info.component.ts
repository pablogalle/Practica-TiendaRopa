import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoService } from './product-info.service';
import { ProductInfo } from 'src/app/interfaces/productInfo.interface';
import { ProductInfoImpl } from 'src/app/implementations/productInfo.model';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog-product-info',
  templateUrl: './catalog-product-info.component.html',
  styleUrls: ['./catalog-product-info.component.scss']
})
export class CatalogProductInfoComponent implements OnInit{

  producto!: ProductInfo
  shoppingCart = faShoppingCart

  constructor(
    private route: ActivatedRoute,
    private productInfoService: ProductInfoService
  ){}


  ngOnInit(): void {
    this.obtenerInfoProducto(this.route.snapshot.paramMap.get("id")!);
  }

  obtenerInfoProducto(id: string) {
   this.productInfoService.obtenerInfoProducto(+id-1).subscribe(
    (product) => {
      this.producto = new ProductInfoImpl(product.sizes, product.id, product.name, product.category, product.price, product.discount, product.image, product.wishlist);
    }
   ) 
  }

}



