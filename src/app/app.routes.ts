import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'category/:name', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
