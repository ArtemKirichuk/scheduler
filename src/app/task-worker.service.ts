import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { map, Observable, Subject } from 'rxjs';
import { ifDay } from './calendar/calendar.component';
// import { getDatabase } from "firebase/database";
export interface ifTask {
  name: string,
  date: string,
  id?: string
}
@Injectable({
  providedIn: 'root'
})
export class TaskWorkerService {
  private url = 'https://calendar-d13b7-default-rtdb.firebaseio.com/task/'
  constructor(private http: HttpClient) { }
  
  fnCreate(oTask: ifTask): Observable<ifTask> {
    return this.http.post<ifTask>(this.url + oTask.date + '.json', oTask)
  }
  fnGetTask(date: string): Observable<ifTask[]> {
    return this.http.get<any>(this.url + date + '.json').pipe(
      map((aTask) => {
        if(!aTask) return []
        return Object.keys(aTask).map((i)=>{ return {...aTask[i],id: i} } )
      }))
  }
  fnDelTask(oTask:ifTask){
    return this.http.delete<any>(this.url + oTask.date +  `/${oTask.id}.json`)
  }
}
