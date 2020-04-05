import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EditionDataService } from 'src/app/shared/edition-data.service';

@Component({
    selector:"presentation-form",
    templateUrl:"presentation-form.component.html",
    styleUrls:["presentation-form.component.scss"]
})

export class PresentationForm implements OnInit{

    constructor(private formBuilder: FormBuilder, private editionDataService: EditionDataService){
    }
    presentationForm = this.formBuilder.group({
        coverImage: ['https://iili.io/JCoi37.png'],
        history:[''],
        psychology:[''],
        physiology:[''],
        character: this.formBuilder.group({
            name: [''],
            cloth: [''],
            age: [''],
            faction:[''],
            mentor:[''],
            origin:[''],
            avatar: ['https://iili.io/JKQa4e.png'],

        }),
        player: this.formBuilder.group({
            name:[''],
            age:[''],
            level:[''],
            secondAccount:[''],
            findIt:[''],
            aWord:[''],
        }),
    })
    ngOnInit() {
    
        this.onChanges()
    }

    onChanges(){
      this.presentationForm.valueChanges.subscribe(val => {
          this.editionDataService.getUserData(val)
      }) 
    }
}