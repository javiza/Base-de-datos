import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

tareas;
error;

constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.peticionExterna();
  }
  actualizar(): void {
    this.peticionExterna();
  }
  peticionExterna(): void {
    this.http.get('http://localhost:3009/api/lista').subscribe(
      (respuesta) => this.tareas = respuesta,
      (error) => this.error = error,

    )
  }
  crearRegistro(){
    var parametros = { texto : 'xxx'};
    this.http.post('http://localhost:3009/api/lista', parametros).subscribe((respuesta => {
      console.log("registro guardado")
    }))
  }
}
