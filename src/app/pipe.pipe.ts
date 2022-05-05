import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class datePipe implements PipeTransform {

  transform(value: moment.Moment, format:string): string {
    
    return value.format(format);
  }

}
