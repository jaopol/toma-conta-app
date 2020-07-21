import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders} from '@angular/common/http';

import { ApontamentoDTO } from '../core/model/apontamentoDTO';
import { Observable , throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import * as AppUtils from '../shared/comum/app.utils';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrlApi: string;

  private _OPTIONS = { headers: new HttpHeaders({ 'Content-Type' : 'application/json' })};

  constructor( private httpClient: HttpClient ) {

   }

  public apontar( apontamentoDTO: ApontamentoDTO ): Observable<any> {

    this.baseUrlApi = `${AppUtils.BASE_URL_API}/api/v1/apontamento`;
    //console.log( `request in ${this.baseUrlApi}` );
    return this.httpClient.post( this.baseUrlApi, apontamentoDTO, this._OPTIONS );
  }

  public getAllApontament(): Observable<any> {

    this.baseUrlApi = `${AppUtils.BASE_URL_API}/api/v1/apontamento`;

    return this.httpClient.get( this.baseUrlApi, this._OPTIONS );
  }

}
