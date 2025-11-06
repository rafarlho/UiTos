import { Observable } from "rxjs"
import { OdataResultDTO } from "../models/odata/odata.result-dto"
import { HttpClient } from "@angular/common/http";

export interface GenericApiService<ResultDTO,AddDTO,UpdateDTO> {
    readonly httpClient: HttpClient; 
    readonly url: string;
    getAll(query?:string): Observable<OdataResultDTO<ResultDTO>> 
    add(entity: AddDTO): Observable<ResultDTO>
    update(entity:UpdateDTO): Observable<ResultDTO>
}

