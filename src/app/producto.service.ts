import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private base2url= "http://localhost:8090/api/productos";

  constructor(private httpClient: HttpClient) { }

  obtenerproductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.base2url}/obtener`);
  } 

  obtenerporId(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.base2url}/obtener/${id}`);
  } 


  //esto metodo sirve para registrar un nuevo
  agregarproducto(producto: Producto): Observable<Object>{

    return this.httpClient.post(`${this.base2url}/agregar`, producto);

  }

  actualizar(id:number, producto:Producto) : Observable<Object>{
    return this.httpClient.put(`${this.base2url}/modificar/${id}`,producto);
  }

  eliminar(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.base2url}/borrar/${id}`);
  }
  
}
