import { Component, OnInit } from '@angular/core';
import { CatalogProductsService } from './catalog-products.service';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductImpl } from 'src/app/implementations/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit {
  products: Product[] = []

  constructor(
    private catalogProductsService: CatalogProductsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.obtenerProductos();
  }

  navegarAInfoProducto(idProducto: number) {
    this.router.navigate(['catalog/product/', idProducto])
  }

  obtenerProductos() {
    this.catalogProductsService.obtenerProductos().subscribe(
      (data) => {
        data.forEach((product) => {
          const productImport: Product = new ProductImpl(product.id, product.name, product.category, product.price, product.discount, product.image, product.wishlist)
          this.products.push(productImport);
        });
      }
    )
  }

}
