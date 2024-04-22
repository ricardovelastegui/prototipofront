import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(){
      
  }

  login() {
    this.usuarioService.login({username: this.username, password: this.password})
      .subscribe(response => {
        this.router.navigate(['/dashboard']);
        return true;
        // mas logica, pilas
      }, error => {
        console.error('Error en el login:', error);
        return false;
      });
  }

}
