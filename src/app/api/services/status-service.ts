import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { StatusAddAdapter } from '../../models/status/status-add.adapter';
import { StatusResultAdapter } from '../../models/status/status-result.adapter';
import { StatusUpdateAdapter } from '../../models/status/status-update.adapter';
import { StatusAddDTO } from '../../models/status/status.add.dto';
import { Status } from '../../models/status/status.model';
import { StatusResultDTO } from '../../models/status/status.result-dto';
import { StatusUpdateDTO } from '../../models/status/status.update.dto';
@Injectable({
  providedIn: 'root',
})
export class StatusService extends BaseService<Status, StatusResultDTO, StatusAddDTO, StatusUpdateDTO> {
  
  constructor(
    protected override resultAdapter : StatusResultAdapter,
    protected override addAdapter : StatusAddAdapter,
    protected override updateAdapter : StatusUpdateAdapter
  ) {
    const api = new GenericApiService<StatusResultDTO, StatusAddDTO, StatusUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/Status";
  }
}
