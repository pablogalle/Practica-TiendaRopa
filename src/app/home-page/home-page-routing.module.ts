import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalog', loadChildren: () => import('src/app/catalog/catalog.module').then(m => m.CatalogModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
