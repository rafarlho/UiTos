import { Component, computed, inject, Signal } from '@angular/core';
import { Auth0ClientService, AuthService } from '@auth0/auth0-angular';
import { SidenavLayoutComponent } from "../../shared/components/sidenav-layout/sidenav-layout.component";
import { UserService } from '../../api/services/user-service';
import { map, take, tap } from 'rxjs';
import { User } from '../../models/user/user.model';
import { Odata } from '../../models/odata/odata.model';
import { UserStore } from '../../stores/user.store';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly auth = inject(AuthService)

  private readonly userService = inject(UserService)
  // private userMapper = inject(UserAdapter)
  private readonly userStore = inject(UserStore)
  user : Signal<User | null> = computed(()=>this.userStore.user())
  organizations = this.userStore.organizations
  constructor() {

    this.auth.user$.subscribe((profile) => {
      const user : User = {
        DbCreatedOn:new Date(),
        RowVersion:"",
        Id:0,
        DbStatus: true,
        Email: profile?.email ?? "",
        FullName: profile?.name ?? "",
        UserName: profile?.nickname ?? ""
      }
      this.userService.loginAndGetOrganizations(user).pipe(take(1)).subscribe({next: (user:User) => {
        this.userStore.updateUser(user)
      }})
    })
  }
}
