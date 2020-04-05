import { Component, Renderer2 } from '@angular/core';
import { EditionDataService } from 'src/app/shared/edition-data.service';
import { PresentationFormTypes } from 'src/app/types/presentation-form.types';


@Component({
    selector: 'previewer',
    templateUrl: 'previewer.component.html',
    styleUrls: ['previewer.component.scss']
})


export class Previewer {
    public presentationData: PresentationFormTypes = new PresentationFormTypes();
    constructor(private editionDataService: EditionDataService, private renderer: Renderer2) {
        this.editionDataService.userData.subscribe(formData => {
            this.presentationData = formData
        })
    }

    toggleClass(event: any, toggleClass: string): void {
        const section = event.target.parentNode;
        if (section.classList.contains(toggleClass) && section.classList.contains('content-section')) {
            section.classList.remove(toggleClass);
        } else if (!section.classList.contains(toggleClass) && section.classList.contains('content-section')) {
            section.classList.add(toggleClass);
        }
    }
}