import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { map, Observable } from 'rxjs';
import { ifDay } from './calendar/calendar.component';
export interface ifTask {
  name:string,
  date:string
}
@Injectable({
  providedIn: 'root'
})
export class TaskWorkerService {
  private url = 'https://calendar-d13b7-default-rtdb.firebaseio.com/task'
  constructor(private http: HttpClient) { }
  fnCreate(oTask:ifTask): Observable<void>{
    
    return this.http.post<ifTask>(this.url,oTask).pipe(map((res)=>{
      debugger
      console.log(res);
    }))
  }
  fnGetTask(){
    return this.http.get(this.url)
  }
}
