import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Legion } from '@api/legion/legion.types';

@Injectable({
  providedIn: 'root',
})
export class EditionDataService {
    public userData = new Subject<any>();
    public legionData = new Subject<Legion>();

    getUserData(data: any) {
        this.userData.next(data);
    }

    getLegionData(data:Legion){
      this.legionData.next(data)
    }

} 

