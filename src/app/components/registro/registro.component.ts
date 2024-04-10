import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  username: string | undefined;
  password: string | undefined;
  role: string | undefined;

  constructor(private usuarioService: UsuarioService) {}

  registro() {
    this.usuarioService.registrarUsuario({username: this.username, password: this.password, role: this.role})
      .subscribe(response => {
        console.log('Registro exitoso:', response);
        // Aquí puedes redirigir a otra página o hacer otras acciones después del registro
      }, error => {
        console.error('Error en el registro:', error);
      });
  }

 
}
