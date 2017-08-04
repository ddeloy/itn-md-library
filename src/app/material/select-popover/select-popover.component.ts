import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'optfilter'})
export class OptFilterPipe implements PipeTransform {
  transform(items: any[], filter: string, showOnlyChecked: boolean = false): any {
    if (!items) {
        return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => {
        if(showOnlyChecked) {
            return item.checked && (item.text.toLowerCase().indexOf(filter) !== -1);
        } else {
            return (item.text.toLowerCase().indexOf(filter) !== -1);
        }
    });
  }
}

@Component({
  selector: 'select-popover',
  templateUrl: './select-popover.component.html'
})
export class SelectPopoverComponent implements OnInit {
    @Input() label: string;
    @Input() options: any[];
    @Output() onClose = new EventEmitter<any[]>();  
    private _totalSelected:number = 0;
    private _showOnlyChecked: boolean = false;

    onOptionChange() {
        let checked:number = 0;
        this.options.forEach(option => {
                if(option.checked) {
                    checked++;
                }
            });
        this._totalSelected = checked;
    }

    ngOnInit() { this.onOptionChange(); }

    ngOnDestroy() {
        this.onClose.emit(this.options);
    }
}