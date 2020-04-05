import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatPleinText'})
export class FormatPleinText implements PipeTransform {
  transform(value: string = ""): string {
    const result = value.split('\n\n').reduce((formatedText, line) => `${formatedText}  <p> ${line} </p>`);
    return result;
  }
}