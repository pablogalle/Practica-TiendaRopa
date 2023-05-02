import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './home-page/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo:'home-page', pathMatch:'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'home-page', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
