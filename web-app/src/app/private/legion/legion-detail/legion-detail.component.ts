import { Component, OnInit } from '@angular/core';
import { EditionDataService } from 'src/app/shared/edition-data.service';
import { Legion } from '@api/legion/legion.types';
import { LegionRepository } from '@api/legion/legion.repository';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: "legion-detail",
    templateUrl: "legion-detail.component.html",
})


export class LegionDetailComponent implements OnInit {
    private legionId: number;
    legion: Legion;

    constructor(private legionRepository: LegionRepository, private router: ActivatedRoute) { }

    ngOnInit() {
        this.router.params.subscribe(params => {
            this.legionId = params.id;
        })
        if (this.legionId) {
            this.legionRepository.findLegion(this.legionId).subscribe(legion => {
                this.legion = legion;
            })
        }
    }
    backgroundImage(){
        return this.legion?.image ? this.legion.image : '/assets/images/default-legion.jpg';
    }
    updateLegion(updatedLegion: Legion){
        this.legion = updatedLegion;
    }
}