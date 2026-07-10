import { Routes } from '@angular/router';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'products',
    component: Products
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'about',
    component: About
  },



  {
    path: 'products/:id',
    component: ProductDetail
  },

  {
  path: 'cart',
  component: Cart
  },

  {
    path: '**',
    redirectTo: ''
  },

];