import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  private route = inject(ActivatedRoute);

  private productService = inject(ProductService);

  product?: Product;

  constructor() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(id);

  }

  private cartService = inject(CartService);
  addToCart() {

  if (this.product) {

    this.cartService.addToCart(this.product);

    alert('Producto agregado al carrito');

  }

  }
}