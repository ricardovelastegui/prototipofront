import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  private _isLoggedIn = false;


  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  } 

  private baseUrl = 'http://localhost:8090/api/usuarios'

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro`, usuario);
  }

  saveUsuario(usuario: any): void{
    localStorage.setItem('currentUser', JSON.stringify(usuario));

  }
  getUsuario(): any {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  login(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, usuario).pipe(
      tap((response: any) => {
        if (response && response.success){
          this._isLoggedIn = true;
        }
      })
    );
    
  }

  logout(): void {
    // Tu lógica de cierre de sesión aquí
    // Cuando el usuario cierra la sesión, establece _isLoggedIn en false
    this._isLoggedIn = false;
  }



}


// private loggedIn = new BehaviorSubject<boolean>(false);

  // get isLoggedIn(): Observable<boolean> {
  //   return this.loggedIn.asObservable();
  // }

  // logined(): void{
  //   this.loggedIn.next(true);
  // }

  // logout(): void{
  //   this.loggedIn.next(false);
  // }


  