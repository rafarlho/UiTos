import { inject, Injectable } from '@angular/core';
import {GenericApiService as IGenericApiService } from "./generic-api-service.model"
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tosApiUrl } from '../environemnt';
import { OdataResultDTO } from '../models/odata/odata.result-dto';
import { OdataResultAdapter } from '../models/odata/odata-result.adapter';
@Injectable({
  providedIn: 'root'
})
export class GenericApiService<ResultDTO,AddDTO,UpdateDTO> implements IGenericApiService<ResultDTO,AddDTO,UpdateDTO>{

  private readonly httpClient = inject(HttpClient)
  protected apiUrl = tosApiUrl

  public odataResultAdapter = inject(OdataResultAdapter)

  public setAdditionalUrl(additionalUrl: string): void {
    this.apiUrl += additionalUrl
  }

  getAll(query?: string): Observable<OdataResultDTO<ResultDTO>> {
    return this.httpClient.get<OdataResultDTO<ResultDTO>>(this.apiUrl + "/getAll" + (query ?? ""))
  }
  add(entity: AddDTO): Observable<ResultDTO> {
    return this.httpClient.post<ResultDTO>(this.apiUrl+ "/add", {entity})
  }
  update(entity: UpdateDTO): Observable<ResultDTO> {
    return this.httpClient.put<ResultDTO>(this.apiUrl+ "/update", {entity})
  }
  
}
