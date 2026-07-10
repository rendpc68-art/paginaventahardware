import { Component, computed, inject, signal } from '@angular/core';

import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCard
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  private productService = inject(ProductService);

  products = this.productService.getProducts();
  categorias = [

  'Todos',

  'Procesadores',

  'Tarjetas Gráficas',

  'RAM',

  'SSD',

  'Monitores'

  ];
  
  busqueda = signal('');
  categoriaSeleccionada = signal('Todos');

  productosFiltrados = computed(() => {

    const texto = this.busqueda().toLowerCase();

    const categoria = this.categoriaSeleccionada();

    return this.products.filter(producto => {

      const coincideBusqueda =

        producto.nombre.toLowerCase().includes(texto) ||

        producto.marca.toLowerCase().includes(texto) ||

        producto.categoria.toLowerCase().includes(texto);

      const coincideCategoria =

        categoria === 'Todos' ||

        producto.categoria === categoria;

      return coincideBusqueda && coincideCategoria;

    });

  });
}