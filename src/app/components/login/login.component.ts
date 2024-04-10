import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(){
      
  }

  login() {
    this.usuarioService.login({username: this.username, password: this.password})
      .subscribe(response => {
        console.log('Login exitoso:', response);
        // Aquí puedes redirigir a otra página o hacer otras acciones después del login
      }, error => {
        console.error('Error en el login:', error);
      });
  }

}
