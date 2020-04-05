import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'defaultTemplateValue'})
export class DefaultTemplateValue implements PipeTransform {
  transform(value: string | number): string {
     return value ? value.toString() : ""
  }
}