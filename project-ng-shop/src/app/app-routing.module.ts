import { AddNewProductComponent } from './admin/add-new-product/add-new-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminGuard } from './utilities/guards/admin.guard';
import { LoginGuard } from './utilities/guards/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent, children: [
    { path: 'add-new-product', component: AddNewProductComponent }
  ] },
  { path: 'products', component: ProductsComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [LoginGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [LoginGuard] },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [LoginGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [LoginGuard, AdminGuard] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [LoginGuard, AdminGuard], },
  { path: 'admin/products/add-new-product', component: AddNewProductComponent, canActivate: [LoginGuard, AdminGuard] },
  { path: 'admin/products/:id', component: AddNewProductComponent, canActivate: [LoginGuard, AdminGuard], },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
