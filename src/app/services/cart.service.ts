import { Injectable, signal, computed } from '@angular/core';

import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items = signal<CartItem[]>([]);

  cartItems = this.items.asReadonly();

  totalItems = computed(() =>

    this.items().reduce((total, item) => total + item.quantity, 0)

  );

  totalPrice = computed(() =>

    this.items().reduce(

      (total, item) => total + item.product.precio * item.quantity,

      0

    )

  );

  addToCart(product: Product) {

    const items = [...this.items()];

    const existing = items.find(

      item => item.product.id === product.id

    );

    if (existing) {

      existing.quantity++;

    } else {

      items.push({

        product,

        quantity: 1

      });

    }

    this.items.set(items);

  }

  removeFromCart(productId: number) {

    this.items.set(

      this.items().filter(

        item => item.product.id !== productId

      )

    );

  }

  clearCart() {

    this.items.set([]);

  }

}