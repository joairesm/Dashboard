import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'togglebutton-component',
    templateUrl: './togglebutton.component.html',
    styleUrls: ['./togglebutton.component.scss']
})
export class ToggleButtonComponent {
    
    @Input('default-value') activate: boolean;
    @Input('on-text') toggleOnText: string;
    @Input('off-text') toggleOffText: string;
    @Output() valueChange = new EventEmitter();

    constructor() { }

    toggle(){
        this.activate = !this.activate;
        this.valueChange.emit(this.activate);
    }
}
