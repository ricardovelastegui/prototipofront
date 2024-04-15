import { CanActivateFn } from '@angular/router';
import { Injector } from '@angular/core';
import { UsuarioService } from './usuario.service';

export const authGuardGuard: CanActivateFn = (route, state) => {


  const injector = Injector.create({providers: [{provide: UsuarioService, deps: []}]});
  const usuarioService = injector.get(UsuarioService);
  if(usuarioService.isLoggedIn){
    return false;
  }
  return true;
};
