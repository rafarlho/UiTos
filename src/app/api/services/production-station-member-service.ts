import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { ProductionStationMemberAddAdapter } from '../../models/production-station-member/production-station-member-add.adapter';
import { ProductionStationMemberResultAdapter } from '../../models/production-station-member/production-station-member-result.adapter';
import { ProductionStationMemberUpdateAdapter } from '../../models/production-station-member/production-station-member-update.adapter';
import { ProductionStationMemberAddDTO } from '../../models/production-station-member/production-station-member.add.dto';
import { ProductionStationMember } from '../../models/production-station-member/production-station-member.model';
import { ProductionStationMemberResultDTO } from '../../models/production-station-member/production-station-member.result-dto';
import { ProductionStationMemberUpdateDTO } from '../../models/production-station-member/production-station-member.update.dto';
@Injectable({
  providedIn: 'root',
})
export class ProductionStationMemberService extends BaseService<ProductionStationMember, ProductionStationMemberResultDTO, ProductionStationMemberAddDTO, ProductionStationMemberUpdateDTO> {
  
  constructor(
    protected override resultAdapter : ProductionStationMemberResultAdapter,
    protected override addAdapter : ProductionStationMemberAddAdapter,
    protected override updateAdapter : ProductionStationMemberUpdateAdapter
  ) {
    const api = new GenericApiService<ProductionStationMemberResultDTO, ProductionStationMemberAddDTO, ProductionStationMemberUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/ProductionStationMember";
  }
}
