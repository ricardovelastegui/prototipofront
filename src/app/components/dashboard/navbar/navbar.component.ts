import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isAdmin: boolean = false;
  isClient: boolean = false;

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    const usuario = this.usuarioService.getUsuario();
    if(usuario && usuario.role === 'admin'){
      this.isAdmin = true;
    } else if(usuario && usuario.role === 'client'){
      this.isClient = true;
    }
  }

}



