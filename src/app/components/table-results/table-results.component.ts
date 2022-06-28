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

  reports: any[] = [];
  // eliminar dato de prueba del arreglo reports
  collisions: string = '0';
  successfully_packets: string = '0';
  actual_time: number = 0;
  time: number = 0;
  data: any = {}; //cantidad de hosts parámetros
  isCondition:boolean=false;

  constructor(private route: ActivatedRoute,
    public _formService: FormServiceService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this._formService.$getTime.subscribe(async (data) => {
      this.data = await data;
    });
    let id = window.setInterval(async () => {
      //llamar al servicio
      let datas = await this._formService.getData(this.actual_time)
      if(datas.time > this.actual_time){
        this.reports.push(datas);
        this.actual_time = datas.time
        this.collisions = datas.collisions
        this.successfully_packets = datas.successfully_packets
      }
      if(this.actual_time >= (this.data.time)){
        this.isCondition=true;
        this.showStatistics();
        this.showStatisticsBarras();
        clearInterval(id)
      }
    }, 10);
  }

  showStatistics(){
    let data : any =[
      {
        "name": "Colisiones",
        "value": this.collisions
      },
      {
        "name": "Paquetes exitosos",
        "value": this.successfully_packets
      }
    ];
    this._formService.sendStatisData(data);
  }

  showStatisticsBarras(){
    let data : any =[];
    this.reports.forEach(async element => {
     await data.push({
        name:element.time,
        value:element.successPackets
      })
    });
    console.log(data);
    this._formService.sendStatisDataBarra(data);
  }
}
