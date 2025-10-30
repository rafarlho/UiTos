import { inject, Injectable } from '@angular/core';
import {GenericApiService as IGenericApiService } from "./generic-api-service.model"
import { Observable } from 'rxjs';
import { Odata } from '../models/generic/odata.model';
import { HttpClient } from '@angular/common/http';
import { tosApiUrl } from '../environemnt';
@Injectable({
  providedIn: 'root'
})
export class GenericApiService<T,R,S> implements IGenericApiService<T,R,S>{

  private readonly httpClient = inject(HttpClient)
  protected apiUrl = tosApiUrl

  protected setAdditionalUrl(additionalUrl: string): void {
    this.apiUrl += additionalUrl
  }

  getAll(query?: string): Observable<Odata<T>> {
    return this.httpClient.get<Odata<T>>(this.apiUrl + "/getAll" + (query ?? ""))
  }
  add(entity: R): Observable<R> {
    return this.httpClient.post<R>(this.apiUrl+ "/add", {entity})
  }
  update(entity: S): Observable<S> {
    return this.httpClient.put<S>(this.apiUrl+ "/update", {entity})
  }
  
}
