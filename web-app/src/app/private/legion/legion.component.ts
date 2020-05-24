import { Component, OnInit } from '@angular/core';
import { LegionRepository } from '@api/legion/legion.repository';
import { Legion } from '@api/legion/legion.types';

@Component({
    selector:'legion',
    templateUrl:'legion.component.html',
})
export class LegionComponent  implements OnInit{
    legions: Legion [] = [];
    displayedColumns: string[]  = ['id','name', 'edit', 'delete'];
    constructor(private legionRepository:LegionRepository){}

    ngOnInit(){
        this.legionRepository.findLegions().subscribe(legions => {
            this.legions = legions;
        })
    }

    deleteLegion(id:number){
        this.legionRepository.deleteLegion(id).subscribe( _ => {
            this.legions = this.legions.filter(legion => {
                return legion.id !== id
            })
        });
    }

}