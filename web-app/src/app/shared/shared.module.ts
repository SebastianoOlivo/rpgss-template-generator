import { NgModule } from '@angular/core';
import { EditableContentComponent } from './editable-content/editable-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'


@NgModule({
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ],
    declarations: [
        EditableContentComponent,
    ],
    exports: [
        EditableContentComponent,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ]
})
export class SharedModule { }
