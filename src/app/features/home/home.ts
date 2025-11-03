import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SidenavLayoutComponent } from "../../shared/components/sidenav-layout/sidenav-layout.component";
import { UserService } from '../../api/services/user-service';
import { map, tap } from 'rxjs';
import { User } from '../../models/user/user.model';
import { Odata } from '../../models/odata/odata.model';

@Component({
  selector: 'app-home',
  imports: [SidenavLayoutComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly auth = inject(AuthService)

  private readonly userService = inject(UserService)
  // private userMapper = inject(UserAdapter)

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: Odata<User>) => console.log(data))
    // this.userService.getAll().pipe().subscribe((data:Odata<UserResultDTO>) => {
    //   const dataNew: Odata<User>  =  {...data, Items:  this.userMapper.adapt(data.Items)} this.userMapper.adapt(data)   
    // })
  }
}
