import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'app/services/form-service.service';

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
  data: any = {};//cantidad de hosts parámetros

  constructor(private route: ActivatedRoute,
    public _formService: FormServiceService) { }

  async ngOnInit(): Promise<void> {
    await this._formService.$getTime.subscribe(async (data) => {
      this.data = await data;
    });
    let id = window.setInterval(async () => {
      //llamar al servicio
      //let datas = _service.metodoPost();
      //this.reports.push(datas);
      this.time += 1000;
      if(this.time >= (this.data.time * 1000)){
        clearInterval(id)
      }
    }, this.time);
  }

  getReport(){
    // hacer push a report con el servicio creado
  }

}
