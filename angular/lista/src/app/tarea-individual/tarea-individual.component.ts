import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {
  @Input()
  tareaInfo: any;

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
  }
  borrarRegistro(tareaInfo): void {
    this.http.delete('http://localhost:3009/api/lista/' + tareaInfo._id).subscribe((res) => {
      console.log("Registro borrado");
    })
  }
}
