import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { Organization } from '../../models/organization/organization.model';
import { OrganizationResultDTO } from '../../models/organization/organization.result-dto';
import { OrganizationAddDTO } from '../../models/organization/organization.add.dto';
import { OrganizationUpdateDTO } from '../../models/organization/organization.update.dto';
import { OrganizationResultAdapter } from '../../models/organization/organization-result.adapter';
import { OrganizationAddAdapter } from '../../models/organization/organization-add.adapter';
import { OrganizationUpdateAdapter } from '../../models/organization/organization-update.adapter';
@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService<Organization, OrganizationResultDTO, OrganizationAddDTO, OrganizationUpdateDTO> {
  
  constructor(
    protected override resultAdapter : OrganizationResultAdapter,
    protected override addAdapter : OrganizationAddAdapter,
    protected override updateAdapter : OrganizationUpdateAdapter
  ) {
    const api = new GenericApiService<OrganizationResultDTO, OrganizationAddDTO, OrganizationUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/organization";
  }
}
