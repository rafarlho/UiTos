import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { ProductionStationAddAdapter } from '../../models/production-station/production-station-add.adapter';
import { ProductionStationResultAdapter } from '../../models/production-station/production-station-result.adapter';
import { ProductionStationUpdateAdapter } from '../../models/production-station/production-station-update.adapter';
import { ProductionStationAddDTO } from '../../models/production-station/production-station.add.dto';
import { ProductionStation } from '../../models/production-station/production-station.model';
import { ProductionStationResultDTO } from '../../models/production-station/production-station.result-dto';
import { ProductionStationUpdateDTO } from '../../models/production-station/production-station.update.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductionStationService extends BaseService<ProductionStation, ProductionStationResultDTO, ProductionStationAddDTO, ProductionStationUpdateDTO> {
  
  constructor(
    protected override resultAdapter : ProductionStationResultAdapter,
    protected override addAdapter : ProductionStationAddAdapter,
    protected override updateAdapter : ProductionStationUpdateAdapter
  ) {
    const api = new GenericApiService<ProductionStationResultDTO, ProductionStationAddDTO, ProductionStationUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/ProductionStation";
  }
}
