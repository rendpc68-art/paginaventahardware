import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {

    return PRODUCTS;

  }

  getProductById(id: number): Product | undefined {

  return PRODUCTS.find(product => product.id === id);

  }

}