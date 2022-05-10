import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, observable, Subject, subscribeOn, switchMap } from 'rxjs';
import { DateService } from '../date.service';
import { ifTask, TaskWorkerService } from '../task-worker.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task = new FormGroup({ name: new FormControl() });
  aTask: ifTask[] = []
  bLoad: boolean = false;
  obLoadTask = new Observable<void>((observer) => {
    this.bLoad = true;
    this.taskWorkerService.fnGetTask(this.dateService.fnGetDate().format('yyyyMMDD'))
      .subscribe((aTask) => {
        let sMessage = 'Список задач обновлен';

        this._snackBar.open(sMessage, '', {
          duration: 1000
        })
        observer.next();
        this.bLoad = false;
        this.aTask = aTask.slice();
      },
        (err) => {
          console.log(err)

        })
  });

  constructor(

    public taskWorkerService: TaskWorkerService,
    public dateService: DateService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

    this.dateService.fnGetSubject()
      .pipe(switchMap(() => this.obLoadTask))
      .subscribe()

  }

  fnAddTask() {
    let oTask: ifTask = {
      name: this.task.value.name,
      date: this.dateService.fnGetDate().format('yyyyMMDD')
    }
    this.taskWorkerService.fnCreate(oTask)
      .pipe(
        switchMap((oTask) => this.obLoadTask))
      .subscribe()

    this.task.reset();
  }
  fnDeleteTask(task: ifTask) {
    this.taskWorkerService.fnDelTask(task)
      .pipe(
        switchMap(() => this.obLoadTask))
      .subscribe(
        () => { console.log('Delete task'); },
        (err) => { console.error(err) }
      )

  }
}
