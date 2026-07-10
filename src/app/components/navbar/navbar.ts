import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  private cartService = inject(CartService);

  totalItems = this.cartService.totalItems;

}
