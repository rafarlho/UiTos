// base-service.abstract.ts
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenericApiService } from './generic-api-service';
import { Odata } from '../models/odata/odata.model';
import { OdataResultDTO } from '../models/odata/odata.result-dto';
import { ModelAdapter } from '../core/contracts/model-adapter';

export abstract class BaseService<Model, ResultDTO, AddDTO, UpdateDTO> {

    constructor(
        protected apiService: GenericApiService<ResultDTO, AddDTO, UpdateDTO>,
        protected resultAdapter: ModelAdapter<ResultDTO, Model>, 
        protected addAdapter: ModelAdapter<Model, AddDTO>,    
        protected updateAdapter: ModelAdapter<Model, UpdateDTO>  
    ) {}
    

    getAll(query?: string): Observable<Odata<Model>> {
        return this.apiService.getAll(query).pipe(
            map((odataDto: OdataResultDTO<ResultDTO>) => this.apiService.odataResultAdapter.adapt(odataDto)), 
            map((odataModel: Odata<ResultDTO>) => ({...odataModel, Items: this.resultAdapter.adaptArray(odataModel.Items)})) 
        )
    }
    
    add(model: Model): Observable<Model> {
        const addDto: AddDTO = this.addAdapter.adapt(model);
        console.log(addDto)
        return this.apiService.add(addDto).pipe(
            map((resultDto: ResultDTO)=> this.resultAdapter.adapt(resultDto))
        )
    }
    
    update(model: Model): Observable<Model> {
        const updateDto: UpdateDTO = this.updateAdapter.adapt(model);
        return this.apiService.update(updateDto).pipe(
            map((resultDto: ResultDTO) => this.resultAdapter.adapt(resultDto))
        )
    }

    updateMultiple(model: Model[]): Observable<Model[]> {
        const updateDto: UpdateDTO[] = this.updateAdapter.adaptArray(model);
        return this.apiService.updateMultiple(updateDto).pipe(
            map((resultDto: ResultDTO[]) => this.resultAdapter.adaptArray(resultDto))
        )
    }

    disableMultiple(ids: number[]) {
        return this.apiService.disableMultiple(ids)
    }
}