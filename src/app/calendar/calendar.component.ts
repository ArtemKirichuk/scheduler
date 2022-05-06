import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { DateService } from '../date.service';


export interface ifDay {
  day: moment.Moment,
  active: boolean,
  disabled: boolean,
  selected: boolean,
}
export interface ifRowItem {
  [key: string]: ifDay
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  dToDay = moment();

  constructor(public dateService: DateService) {

    dateService.fnGetSubject().subscribe((mDate) => { this.dToDay = mDate; this.fnCreateCalendar() })

  }
  fnSelectDate(day: ifDay) {

    this.dateService.fnSetDate(day.day);
  }
  ngOnInit(): void {
    // this.fnCreateCalendar()
  }
  aWeekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  aWeekDaysRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
  aMonth: ifRowItem[] = []
  fnCreateCalendar() {
    this.aMonth = []
    let dStart = this.dToDay.clone().startOf('month').startOf('week');
    let dEnd = this.dToDay.clone().endOf('month').endOf('week');
    let oRow: ifRowItem = {};

    dStart.add(-1, 'day')

    while (!dStart.isSame(dEnd, 'day')) {

      for (let index = 0; index < this.aWeekDays.length; index++) {
        let sDayName = this.aWeekDays[index];
        let dDay = dStart.add(1, 'day').clone();
        oRow[sDayName] = {
          day: dDay,
          active: dDay.isSame(moment(), 'day'),
          disabled: !dDay.isSame(this.dToDay, 'month'),
          selected: this.dToDay.isSame(dDay, 'day')
        }
      }
      this.aMonth.push(Object.assign({}, oRow));
    }

  }
}
