import { inject, Injectable } from '@angular/core';
import {GenericApiService as IGenericApiService } from "./generic-api-service.model"
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tosApiUrl } from '../environemnt';
import { OdataResultDTO } from '../models/odata/odata.result-dto';
import { OdataResultAdapter } from '../models/odata/odata-result.adapter';
@Injectable()
export class GenericApiService<ResultDTO,AddDTO,UpdateDTO> implements IGenericApiService<ResultDTO,AddDTO,UpdateDTO>{

  readonly httpClient = inject(HttpClient)
  protected apiUrl = tosApiUrl

  public odataResultAdapter = inject(OdataResultAdapter)

  public get url() { return this.apiUrl}

  public set additionalUrl(controllerName: string) {this.apiUrl += controllerName}

  getAll(query?: string): Observable<OdataResultDTO<ResultDTO>> {
    return this.httpClient.get<OdataResultDTO<ResultDTO>>(this.apiUrl + "/getAll" + (query ?? ""))
  }
  add(entity: AddDTO): Observable<ResultDTO> {
    return this.httpClient.post<ResultDTO>(this.apiUrl+ "/add", {...entity})
  }
  update(entity: UpdateDTO): Observable<ResultDTO> {
    return this.httpClient.put<ResultDTO>(this.apiUrl+ "/update", {...entity})
  }
  updateMultiple(entity: UpdateDTO[]): Observable<ResultDTO[]> {
    return this.httpClient.put<ResultDTO[]>(this.apiUrl+ "/updateMultiple", entity)
  }

  disableMultiple(ids: number[]) {
    return this.httpClient.delete(this.apiUrl+ "/disableMultiple", {body: ids})
  }
  
}
