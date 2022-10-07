import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personHeight'
})
export class PersonHeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

	let valueTransformed = '';
	if(value < 100){
		valueTransformed = 'low';
	} else  if (value > 200) {
		valueTransformed = 'high';
	} else {
		valueTransformed = 'normal';
	}
    return valueTransformed;
  }

}
