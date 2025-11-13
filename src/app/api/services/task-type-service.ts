import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { TaskType } from '../../models/task-type/task-type.model';
import { TaskTypeAddAdapter } from '../../models/task-type/task-type-add.adapter';
import { TaskTypeResultAdapter } from '../../models/task-type/task-type-result.adapter';
import { TaskTypeUpdateAdapter } from '../../models/task-type/task-type-update.adapter';
import { TaskTypeAddDTO } from '../../models/task-type/task-type.add.dto';
import { TaskTypeResultDTO } from '../../models/task-type/task-type.result-dto';
import { TaskTypeUpdateDTO } from '../../models/task-type/task-type.update.dto';
@Injectable({
  providedIn: 'root',
})
export class TaskTypeService extends BaseService<TaskType, TaskTypeResultDTO, TaskTypeAddDTO, TaskTypeUpdateDTO> {
  
  constructor(
    protected override resultAdapter : TaskTypeResultAdapter,
    protected override addAdapter : TaskTypeAddAdapter,
    protected override updateAdapter : TaskTypeUpdateAdapter
  ) {
    const api = new GenericApiService<TaskTypeResultDTO, TaskTypeAddDTO, TaskTypeUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/organization";
  }
}
