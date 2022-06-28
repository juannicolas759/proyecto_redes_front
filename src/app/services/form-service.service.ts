import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private time = new BehaviorSubject<any>('')
  $getTime = this.time.asObservable()

  private satatisData = new BehaviorSubject<any>('')
  $getSatatisData = this.satatisData.asObservable()

  private satatisDataBarra = new BehaviorSubject<any>('')
  $getSatatisDataBarra = this.satatisDataBarra.asObservable()

  constructor() { }

  sendTime(data: any) {
    this.time.next(data)
  }

  sendStatisData(data: any) {
    this.satatisData.next(data)
  }
  sendStatisDataBarra(data: any) {
    this.satatisDataBarra.next(data)
  }

  async sendInitParams(datas: any): Promise<any> {
    const res = await axios.post('http://127.0.0.1:8000/init_simulation/', { datas });
    return res.data;
  }

  async getData(time: any): Promise<any> {
    const res = await axios.get('http://127.0.0.1:8000/init_simulation/', { params: { time: time } });
    return res.data;
  }

 

}
