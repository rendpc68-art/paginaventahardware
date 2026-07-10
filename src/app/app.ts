import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    Navbar,
    RouterOutlet,
    Footer
  ],

  templateUrl: './app.html',

  styleUrl: './app.css'
})

export class App {}