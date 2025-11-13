import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { PriorityAddAdapter } from '../../models/priority/priority-add.adapter';
import { PriorityResultAdapter } from '../../models/priority/priority-result.adapter';
import { PriorityUpdateAdapter } from '../../models/priority/priority-update.adapter';
import { PriorityAddDTO } from '../../models/priority/priority.add.dto';
import { Priority } from '../../models/priority/priority.model';
import { PriorityResultDTO } from '../../models/priority/priority.result-dto';
import { PriorityUpdateDTO } from '../../models/priority/priority.update.dto';
@Injectable({
  providedIn: 'root',
})
export class PriorityService extends BaseService<Priority, PriorityResultDTO, PriorityAddDTO, PriorityUpdateDTO> {
  
  constructor(
    protected override resultAdapter : PriorityResultAdapter,
    protected override addAdapter : PriorityAddAdapter,
    protected override updateAdapter : PriorityUpdateAdapter
  ) {
    const api = new GenericApiService<PriorityResultDTO, PriorityAddDTO, PriorityUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/Priority";
  }
}
