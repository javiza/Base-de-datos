import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {
  @Input()
  tareainfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
