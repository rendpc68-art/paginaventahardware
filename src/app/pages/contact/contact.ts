import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  nombre = '';
  correo = '';
  mensaje = '';

  enviado = false;

  enviarFormulario() {

    this.enviado = true;

    if (
      this.nombre.trim().length >= 3 &&
      this.validarCorreo(this.correo) &&
      this.mensaje.trim().length >= 10
    ) {

      alert('¡Mensaje enviado correctamente!');

      this.nombre = '';
      this.correo = '';
      this.mensaje = '';
      this.enviado = false;

    }

  }

  validarCorreo(correo: string): boolean {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);

  }

}