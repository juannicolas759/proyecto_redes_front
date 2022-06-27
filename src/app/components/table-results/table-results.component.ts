import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.css']
})
export class TableResultsComponent implements OnInit {

  reports: any[] = [{time: 1, host: 10, packetsGood: 2, isCollision: true, collisionCounter: 3, packetPerHost: 5}];

  // eliminar dato de prueba del arreglo reports

  constructor() { }

  ngOnInit(): void {
  }

  getReport(){
    // hacer push a report con el servicio creado
  }

}
