import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Producto';  
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit{

  id:number;
  producto: Producto;
  constructor(private route:ActivatedRoute, private productoService:ProductoService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoService.obtenerporId(this.id).subscribe(dato => {
      this.producto = dato;
    });
  }

}
