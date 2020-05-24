import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditionDataService } from 'src/app/shared/edition-data.service';
import { LegionRepository } from '@api/legion/legion.repository';
import { Legion } from '@api/legion/legion.types';
import { error } from 'protractor';


@Component({
    selector: "legion-form",
    templateUrl:"./legion-form.component.html"
})
export class LegionFormComponent implements OnInit{

    private _legion:Legion;
    @Output() legionChange = new EventEmitter<Legion>();
    @Input()
    set legion(legion:Legion){  
        this._legion = legion
        this.legionForm.patchValue({...legion});
    }
    get legion():Legion{
        return this._legion;
    }

    LegionFormData: Legion;

    constructor(private formBuilder: FormBuilder, private editionDataService: EditionDataService, private legionRepository:LegionRepository){}
    legionForm = this.formBuilder.group({
        name:[''],
        image :[''],
        quote:[''],
        summary:[''],
        hierarchy:['']
    })
    ngOnInit() {
        this.onChanges();
    }

    onChanges(){
      this.legionForm.valueChanges.subscribe(val => {
          this.legionChange.emit(val);
      }) 
    }

    onSubmit(){
        if(this.legionForm.valid){
            if(this.legion?.id){
                const legion = {id:this.legion.id, ...this.legionForm.value}
                this.legionRepository.updateLegion(legion).subscribe(
                )
            }else{
                this.legionRepository.addLegion(this.legionForm.value).subscribe(
                );
            }
        }
    }
}