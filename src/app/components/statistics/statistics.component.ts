import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormServiceService } from 'app/services/form-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
 
  single: any = [];
  dataBarras: any = [];

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: Color = { name: 'myScheme', selectable: true, group: ScaleType.Ordinal, domain: ['#f00', '#0f0', '#0ff'], };



  constructor(public _formService: FormServiceService) {
    
  }

  async ngOnInit(): Promise<void> {
    await this._formService.$getSatatisData.subscribe(async (data) => {
      console.log(data)
      this.single = await data;
    });
    await this._formService.$getSatatisDataBarra.subscribe(async (data) => {
      console.log(data)
      this.dataBarras = await data;
    });
  }
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
