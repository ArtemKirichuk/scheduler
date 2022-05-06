import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateService } from '../date.service';
import { ifTask, TaskWorkerService } from '../task-worker.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task = new FormControl('');
  constructor(public taskWorkerService:TaskWorkerService,public dateService: DateService) {
   }

  ngOnInit(): void {
    
  }

  fnAddTask(){
    let oTask:ifTask = {
      name: this.task.value,
      date: this.dateService.fnGetDate().format('DD.MM.yyyy')
    }
    this.taskWorkerService.fnCreate(oTask).subscribe((i)=>{
      debugger
      console.log(i)
    })
    
    this.updateName()
  }
  updateName() {
      this.task.setValue('');
    }
}
