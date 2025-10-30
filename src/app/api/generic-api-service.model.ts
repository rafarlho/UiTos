import { Observable } from "rxjs"
import { Odata } from "../models/generic/odata.model"

export interface GenericApiService<T,R,S> {
    getAll(query?:string): Observable<Odata<T>> 
    add(entity: R): Observable<R>
    update(entity:S): Observable<S>
}

