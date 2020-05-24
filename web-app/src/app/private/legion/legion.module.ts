import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LegionFormComponent } from './legion-form/legion-form.component';
import { LegionComponent } from './legion.component';
import { LegionDetailComponent } from './legion-detail/legion-detail.component';
import { LegionRoutingModule } from './legion-routing.module';
import { CommonModule } from '@angular/common';
import { EditableContentComponent } from 'src/app/shared/editable-content/editable-content.component';

@NgModule({
    declarations: [
        LegionComponent,
        LegionDetailComponent,
        LegionFormComponent,
        
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        LegionRoutingModule,
    ],
    providers: [],
    bootstrap: []
})

export class LegionModule { }