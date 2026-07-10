import { Component, output } from '@angular/core';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})

export class Categories {

  categoriaSeleccionada = output<string>();

  categorias = [

    "Todos",

    "Procesadores",

    "Tarjetas Gráficas",

    "Almacenamiento"

  ];

  seleccionarCategoria(categoria: string){

    this.categoriaSeleccionada.emit(categoria);

  }

}