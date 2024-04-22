import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-agregarprodu',
  templateUrl: './agregarprodu.component.html',
  styleUrls: ['./agregarprodu.component.css']
})
export class AgregarproduComponent implements OnInit {
  
  producto: Producto = new Producto();
  constructor(private productoService: ProductoService, private router: Router){}
  
  ngOnInit(): void {
    console.log(this.producto);
  }

  guardarproducto(){
    this.productoService.agregarproducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irAlalista();

    }, error => console.log(error));
  }

  irAlalista(){
    this.router.navigate(['/dashboard']);
  }
  onSubmit(){

    this.guardarproducto();
    
  }

}
