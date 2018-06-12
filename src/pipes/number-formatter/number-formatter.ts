import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormatter',
})
export class NumberFormatterPipe implements PipeTransform {
  transform(value: any, ...args) {
    let respose;
    let valStr = value.toString();
    if (value.toString().length > 10) {
      respose = this.addName(valStr);
    } else if (value.toString().length > 9) {
      respose = valStr.slice(0, (valStr.length-9)) + "," + valStr.slice(valStr.length-9);
      respose = respose.slice(0, (respose.length-6)) + "," + respose.slice(respose.length-6);
      respose = respose.slice(0, (respose.length-3)) + "," + respose.slice(respose.length-3);
    } else if (value.toString().length > 6) {
      respose = valStr.slice(0, (valStr.length-6)) + "," + valStr.slice(valStr.length-6);
      respose = respose.slice(0, (respose.length-3)) + "," + respose.slice(respose.length-3);
    } else if (value.toString().length > 3) {
      respose = valStr.slice(0, (valStr.length-3)) + "," + valStr.slice(valStr.length-3);
    } else {
      respose = value;
    }
    return respose;
  };

  addName (value) {
    let stuff;
    if (value.length > 24) {
      stuff = value.slice(0, (value.length - 24)) + ' Y';
    } else if (value.length > 21) {
      stuff = value.slice(0, (value.length - 21)) + ' Z';
    } else if (value.length > 18) {
      stuff = value.slice(0, (value.length - 18)) + ' E';
    } else if (value.length > 15) {
      stuff = value.slice(0, (value.length - 15)) + ' P';
    } else if (value.length > 12) {
      stuff = value.slice(0, (value.length - 12)) + ' T';
    } else if (value.length > 10) {
      stuff = value.slice(0, (value.length - 9)) + ' B';
    }
    return stuff;
  };
}
