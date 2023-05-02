import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogProductInfoComponent } from './catalog-product-info/catalog-product-info.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'product/:id', component: CatalogProductInfoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
