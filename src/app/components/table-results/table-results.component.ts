import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-results',
  templateUrl: './table-results.component.html',
  styleUrls: ['./table-results.component.css']
})
export class TableResultsComponent implements OnInit {

  reports: any[] = [{time: 1, host: 10, packetsGood: 2, isCollision: true, collisionCounter: 3, packetsPerHost: 5},
    {time: 2, host: 10, packetsGood: 2, isCollision: true, collisionCounter: 0, packetsPerHost: 5}];
  // eliminar dato de prueba del arreglo reports
  time: number = 1000;
  totalTime: Number = 30000; //Tiempo por simulador, pasar por parámetro
  hosts: Number = 10;//cantidad de hosts parámetros

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = window.setInterval(() => {
      //llamar al servicios
      //let datas = _service.metodoPost();
      //this.reports.push(datas);
      this.time += 1000;
      console.log(this.time)
      if(this.time >= this.totalTime){
        clearInterval(id)
      }
    }, this.time);
  }

  getReport(){
    // hacer push a report con el servicio creado
  }

}
