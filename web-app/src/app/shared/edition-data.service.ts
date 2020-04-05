import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class EditionDataService {
    public userData = new Subject<any>();
    
    
    getUserData(data: any) {
        this.userData.next(data);
      }

} 

