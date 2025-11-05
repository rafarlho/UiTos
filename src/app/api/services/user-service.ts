import { inject, Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { UserAddDTO } from '../../models/user/user.add.dto';
import { UserUpdateDTO } from '../../models/user/user.update.dto';
import { UserResultDTO } from '../../models/user/user.result-dto';
import { UserResultAdapter } from '../../models/user/user-result.adapter';
import { map, Observable } from 'rxjs';
import { Odata } from '../../models/odata/odata.model';
import { BaseService } from '../base-service';
import { User } from '../../models/user/user.model';
import { UserAddAdapter } from '../../models/user/user-add.adapter';
import { UserUpdateAdapter } from '../../models/user/user-update,adapter';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User, UserResultDTO, UserAddDTO, UserUpdateDTO> {
  
  constructor(
    protected genericApi : GenericApiService<UserResultDTO, UserAddDTO, UserUpdateDTO>,
    protected override resultAdapter : UserResultAdapter,
    protected override addAdapter : UserAddAdapter,
    protected override updateAdapter : UserUpdateAdapter
  ) {
    super(genericApi, resultAdapter, addAdapter, updateAdapter)

    this.genericApi.additionalUrl = "/user";
  }

  loginAndGetOrganizations(user:User) {
    const addDto = this.addAdapter.adapt(user)
    return this.genericApi.httpClient.post<UserResultDTO>(this.genericApi.url + "/LoginAndGetOrganizations", addDto).pipe(map((user: UserResultDTO)=> this.resultAdapter.adapt(user)))
  }
}
