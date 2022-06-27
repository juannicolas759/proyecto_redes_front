import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private time = new BehaviorSubject<Number>(0)
  $getTime = this.time.asObservable()

  constructor() { }

  sendTime(data: any){
    this.time.next(data)
  }

}
