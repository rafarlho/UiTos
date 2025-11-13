import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { ChoreResultAdapter } from '../../models/chore/chore-result.adapter';
import { ChoreAddAdapter } from '../../models/chore/chore-add.adapter';
import { ChoreUpdateAdapter } from '../../models/chore/chore-update.adapter';
import { Chore } from '../../models/chore/chore.model';
import { ChoreResultDTO } from '../../models/chore/chore.result-dto';
import { ChoreAddDTO } from '../../models/chore/chore.add.dto';
import { ChoreUpdateDTO } from '../../models/chore/chore.update.dto';
@Injectable({
  providedIn: 'root',
})
export class ChoreService extends BaseService<Chore, ChoreResultDTO, ChoreAddDTO, ChoreUpdateDTO> {
  
  constructor(
    protected override resultAdapter : ChoreResultAdapter,
    protected override addAdapter : ChoreAddAdapter,
    protected override updateAdapter : ChoreUpdateAdapter
  ) {
    const api = new GenericApiService<ChoreResultDTO, ChoreAddDTO, ChoreUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/chore";
  }
}
