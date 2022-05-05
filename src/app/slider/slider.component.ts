import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DateService } from '../date.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  toDay = moment();
  // dateServise!:DateService;
  constructor(public dateService:DateService) {
    dateService.fnGetSubject().subscribe((mDate)=>{ this.toDay = mDate })
  }
  
  ngOnInit(): void {
    
  }
  fnChMonth(month:number){
    let newDate = this.toDay.clone().add(month,'month');
    this.dateService.fnSetDate(newDate);
  }
}
