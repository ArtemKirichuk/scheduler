import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
  private date = new BehaviorSubject(moment())
  fnGetDate(){
    return this.date.value;
  }
  fnGetSubject=()=>{return this.date}
  fnSetDate(date:moment.Moment){
    this.date.next(date);
  }
  constructor() { 
    // moment.locale('ru');
  }
}
