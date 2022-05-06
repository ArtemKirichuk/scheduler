import { Injectable } from '@angular/core';
import  moment from 'moment';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private mDate = moment();
  
  private date:BehaviorSubject<moment.Moment>;
  fnGetDate(){
    return this.date.value;
  }
  fnGetSubject=()=>{return this.date}
  fnSetDate(date:moment.Moment){
    this.date.next(date);
  }
  constructor() { 
    this.mDate.locale('ru')
    this.date = new BehaviorSubject(this.mDate);
    
    // moment.locale('ru');
  }
}
