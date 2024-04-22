import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  productos: Producto[];

  constructor(private productoService: ProductoService, private router: Router){}
  filterProducto = '';

  ngOnInit(): void {
    this.obtenerproductos();   
  }

  actualizar(id:number){
    this.router.navigate(['actualizar', id]);
  }

  eliminar(id:number){
    this.productoService.eliminar(id).subscribe(dato => {
      console.log(dato);
      this.obtenerproductos();
    });
  }

  private obtenerproductos(){
    this.productoService.obtenerproductos().subscribe(dato => {

      this.productos = dato;

    });
  }

  ver(id:number){
    this.router.navigate(['/ver', id]);
  }



}
