import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:8090/api/usuarios'

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro`, usuario);
  }

  login(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, usuario);
  }
}
