import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Legion } from './legion.types';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LegionRepository {

    private apiurl = `${environment.apiUrl}/legions`;

    constructor(private http: HttpClient) { }
    private handleError(error: any) {
        return throwError(error);
    }

    findLegions():Observable<Legion[]>{
        return this.http
        .get<Legion[]>(this.apiurl)
        .pipe( map(json => json)
        );
    }

    findLegion(id:number):Observable<Legion>{
        return this.http.get(`${this.apiurl}/${id}`).pipe(
            map(json => json as Legion)
        );
    }

    addLegion(legion:Legion):Observable<Legion>{
        legion.id=null;
        return this.http.post<Legion>(this.apiurl, legion).pipe(
            catchError(this.handleError)
          );
    }

    updateLegion(legion:Legion):Observable<Legion>{
        return this.http.put<Legion>(`${this.apiurl}/${legion.id}`, legion).pipe(
            catchError(this.handleError)
          );
    }

    deleteLegion(id:number):Observable<Legion>{
        return this.http.delete<Legion>(`${this.apiurl}/${id}`).pipe(
            catchError(this.handleError)
          );
    }

}