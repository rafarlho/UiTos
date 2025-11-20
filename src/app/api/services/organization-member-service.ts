import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { BaseService } from '../base-service';
import { Member } from '../../models/member/member.model';
import { MemberResultDTO } from '../../models/member/member.result-dto';
import { MemberAddAdapter } from '../../models/member/member-add.adapter';
import { MemberResultAdapter } from '../../models/member/member-result.adapter';
import { MemberUpdateAdapter } from '../../models/member/member-update.adapter';
import { MemberAddDTO } from '../../models/member/member.add.dto';
import { MemberUpdateDTO } from '../../models/member/member.update.dto';
@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<Member, MemberResultDTO, MemberAddDTO, MemberUpdateDTO> {
  
  constructor(
    protected override resultAdapter : MemberResultAdapter,
    protected override addAdapter : MemberAddAdapter,
    protected override updateAdapter : MemberUpdateAdapter
  ) {
    const api = new GenericApiService<MemberResultDTO, MemberAddDTO, MemberUpdateDTO>();
    super(api, resultAdapter, addAdapter, updateAdapter)

    this.apiService.additionalUrl = "/organizationMember";
  }

}
