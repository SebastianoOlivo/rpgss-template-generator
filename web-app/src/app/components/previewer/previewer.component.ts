import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { EditionDataService } from 'src/app/shared/edition-data.service';
import { PresentationFormTypes } from 'src/app/types/presentation-form.types';


@Component({
    selector: 'previewer',
    templateUrl: 'previewer.component.html',
    styleUrls: ['previewer.component.scss'],
    encapsulation: ViewEncapsulation.None
})


export class Previewer {
    public presentationData: PresentationFormTypes = new PresentationFormTypes();
    public htmlCopy:string;
    public isCopied:boolean = false;
    constructor(private editionDataService: EditionDataService, private el: ElementRef) {
        this.editionDataService.userData.subscribe(formData => {
            this.presentationData = formData;
            this.cloningHtmlcode();
            
        })
    }

    cloningHtmlcode():void{
        setTimeout(() => {
            this.htmlCopy = this.el.nativeElement.querySelector('.card').outerHTML;
        }, .200);
        
    }   

    copyToClipboard():void{
        document.addEventListener('copy', (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', (this.htmlCopy));
            e.preventDefault();
            document.removeEventListener('copy', null);
          });
          document.execCommand('copy');
          this.isCopied = true;
          setTimeout(() => {
            this.isCopied = false;
          }, 1200);
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