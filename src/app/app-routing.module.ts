import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './_components/products/products.component';
import { BusinessComponent } from './_components/business/business.component';
import { RequestComponent } from './_components/request/request.component';
import { BlogComponent } from './_components/blog/blog.component';
import { MainComponent } from './_components/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'request', component: RequestComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
