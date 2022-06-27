import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private time = new BehaviorSubject<any>('')
  $getTime = this.time.asObservable()

  constructor() { }

  sendTime(data: any){
    this.time.next(data)
  }

  async sendInitParams(datas: any): Promise<any> {
    const res = await axios.post('http://127.0.0.1:8000/init_simulation/', {datas});
    return res.data;
  }

  async getData(time: any): Promise<any> {
    const res = await axios.get('http://127.0.0.1:8000/init_simulation/', { params: {time : time} });
    return res.data;
  }
}
