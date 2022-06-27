import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  getTime(){
    return this.time.asObservable()
  }

}
