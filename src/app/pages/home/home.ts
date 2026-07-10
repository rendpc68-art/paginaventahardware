import { Component } from '@angular/core';
import { BrandCarousel } from '../../components/brand-carousel/brand-carousel';
import { signal, computed } from '@angular/core';

import { Categories } from '../../components/categories/categories';

import { PRODUCTS } from '../../data/products';

import { ProductCard } from '../../components/product-card/product-card';

import { Hero } from '../../components/hero/hero'; 

import { inject } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [Categories, ProductCard, Hero, BrandCarousel],

  templateUrl: './home.html',

  styleUrl: './home.css',
})

export class Home {

  categoriaActual = signal("Todos");

  products = PRODUCTS;

  productosFiltrados = computed(() => {

    if(this.categoriaActual() === "Todos"){

        return this.products;

    }

    return this.products.filter(

        p => p.categoria === this.categoriaActual()

    );

});

cambiarCategoria(categoria:string){

    this.categoriaActual.set(categoria);

}

private productService = inject(ProductService);

featuredProducts = this.productService.getProducts().slice(0, 3);

}