import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  product = input.required<Product>();

  private router = inject(Router);

  verDetalles() {

  this.router.navigate(['/products', this.product().id]);

  }

}