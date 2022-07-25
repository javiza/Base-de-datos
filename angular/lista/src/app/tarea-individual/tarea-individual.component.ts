
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {
  @Input()
  tareaInfo: any;

  @Output()
  cambioTarea: EventEmitter<number> = new EventEmitter();
  mostrarDatos!: Boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  borrarRegistro(tareaInfo): void {
    this.http.delete('http://localhost:3009/api/lista/' + tareaInfo._id).subscribe(res =>
      this.cambioTarea.emit()
    )
  }
  activarEdicion(): void{
    this.mostrarDatos = true;
  }

  editarTarea(tareaInfo, nuevoNombre){
    var parametros = { texto: nuevoNombre.value };
    this.http.put('http://localhost:3009/api/lista/' + tareaInfo._id, parametros).subscribe(res => {
      this.cambioTarea.emit()
    })
  }
}
