import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { ProductionTaskAddAdapter } from '../../models/production-task/production-task-add.adapter';
import { ProductionTaskResultAdapter } from '../../models/production-task/production-task-result.adapter';
import { ProductionTaskUpdateAdapter } from '../../models/production-task/production-task-update.adapter';
import { ProductionTaskAddDTO } from '../../models/production-task/production-task.add.dto';
import { ProductionTask } from '../../models/production-task/production-task.model';
import { ProductionTaskResultDTO } from '../../models/production-task/production-task.result-dto';
import { ProductionTaskUpdateDTO } from '../../models/production-task/production-task.update.dto';
@Injectable({
  providedIn: 'root',
})
export class ProductionTaskService extends BaseService<ProductionTask, ProductionTaskResultDTO, ProductionTaskAddDTO, ProductionTaskUpdateDTO> {
  
  constructor(
    protected override resultAdapter : ProductionTaskResultAdapter,
    protected override addAdapter : ProductionTaskAddAdapter,
    protected override updateAdapter : ProductionTaskUpdateAdapter
  ) {
    const api = new GenericApiService<ProductionTaskResultDTO, ProductionTaskAddDTO, ProductionTaskUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/ProductionTask";
  }
}
