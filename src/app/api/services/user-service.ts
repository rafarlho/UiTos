import { Injectable } from '@angular/core';
import { GenericApiService } from '../generic-api-service';
import { UserAddDTO } from '../../models/dtos/add/user.add-dto';
import { UserUpdateDTO } from '../../models/dtos/update/user.update-dto';
import { UserResultDTO } from '../../models/dtos/result/user.result-dto';
import { Observable } from 'rxjs';
import { Odata } from '../../models/generic/odata.model';
import { tosApiUrl } from '../../environemnt';
@Injectable({
  providedIn: 'root'
})
export class UserService extends GenericApiService<UserResultDTO, UserAddDTO, UserUpdateDTO>  {
  
  constructor() {
    super()
    this.setAdditionalUrl("/user")
  }
}
