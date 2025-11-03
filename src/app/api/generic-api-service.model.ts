import { Observable } from "rxjs"
import { OdataResultDTO } from "../models/odata/odata.result-dto"

export interface GenericApiService<ResultDTO,AddDTO,UpdateDTO> {
    getAll(query?:string): Observable<OdataResultDTO<ResultDTO>> 
    add(entity: AddDTO): Observable<ResultDTO>
    update(entity:UpdateDTO): Observable<ResultDTO>
}

