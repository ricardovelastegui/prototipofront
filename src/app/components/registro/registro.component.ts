import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  username?: string;
  password?: string;
  role?: string;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registro() {
    this.usuarioService.registrarUsuario({username: this.username, password: this.password, role: this.role})
      .subscribe(response => {
        console.log('Registro exitoso:', response);
        this.router.navigate(['/login']);
        // Aquí puedes redirigir a otra página o hacer otras acciones después del registro
      }, error => {
        console.error('Error en el registro:', error.error);
      });
  }

 
}
