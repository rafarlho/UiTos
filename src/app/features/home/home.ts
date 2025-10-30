import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SidenavLayoutComponent } from "../../shared/components/sidenav-layout/sidenav-layout.component";
import { UserService } from '../../api/services/user-service';
import { map, tap } from 'rxjs';
import { User } from '../../models/base/user.model';
import { Odata } from '../../models/generic/odata.model';

@Component({
  selector: 'app-home',
  imports: [SidenavLayoutComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly auth = inject(AuthService)

  private readonly userService = inject(UserService)


  ngOnInit(): void {
    
    this.userService.getAll().pipe().subscribe(data => {
      const dataNew: Odata<User>  =  data as unknown as Odata<User>
    })
    
  }
}
