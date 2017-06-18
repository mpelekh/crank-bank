
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fromatAccountNumber'
})
export class FromatAccountNumber implements PipeTransform {
    transform(value: string): string {
        if (!value) return '';

        return "..." + (value.length > 4 ? value.substring(value.length - 4) : value);

    }
}
