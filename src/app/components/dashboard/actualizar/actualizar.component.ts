import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  form?: FormGroup;

  id?:number;
  nombre?:string;
  producto:Producto= new Producto();

  constructor(private productoService: ProductoService, private router: Router, private route:ActivatedRoute, private fb:FormBuilder){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.obtenerporId(this.id!).subscribe(dato =>{
      this.producto = dato;
    }, error => console.log(error));
  }
  irAlalista(){
    this.router.navigate(['/dashboard']);
  }

  onSubmit(){
    this.productoService.actualizar(this.id!, this.producto).subscribe( dato =>{
      this.irAlalista();
    }, error => console.log(error));
  }

}
