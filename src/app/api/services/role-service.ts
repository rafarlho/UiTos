import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { RoleAddAdapter } from '../../models/role/role-add.adapter';
import { RoleResultAdapter } from '../../models/role/role-result.adapter';
import { RoleUpdateAdapter } from '../../models/role/role-update.adapter';
import { RoleAddDTO } from '../../models/role/role.add.dto';
import { Role } from '../../models/role/role.model';
import { RoleResultDTO } from '../../models/role/role.result-dto';
import { RoleUpdateDTO } from '../../models/role/role.update.dto';
@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseService<Role, RoleResultDTO, RoleAddDTO, RoleUpdateDTO> {
  
  constructor(
    protected override resultAdapter : RoleResultAdapter,
    protected override addAdapter : RoleAddAdapter,
    protected override updateAdapter : RoleUpdateAdapter
  ) {
    const api = new GenericApiService<RoleResultDTO, RoleAddDTO, RoleUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/Role";
  }
}
