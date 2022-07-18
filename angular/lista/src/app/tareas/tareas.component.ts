import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

tareas;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.peticionExterna();
  }
  peticionExterna(): void {
    this.http.get('http://localhost:3009/api/lista').subscribe((res) =>{

      this.tareas = res;
    })
  }
}
