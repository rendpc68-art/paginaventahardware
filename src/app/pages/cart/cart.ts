import { Component, inject } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  totalPrice = this.cartService.totalPrice;

  remove(id: number) {

    this.cartService.removeFromCart(id);

  }

  clear() {

    this.cartService.clearCart();

  }

}