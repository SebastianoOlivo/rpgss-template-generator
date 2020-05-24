import { Component } from '@angular/core';


@Component({
    selector: 'editable-content',
    templateUrl: 'editable-content.component.html',
    styleUrls: ['editable-content.component.scss'],
})


export class EditableContentComponent {
    editing = false;

    toggleEdditing(){
        this.editing = !this.editing;
    }
    
}