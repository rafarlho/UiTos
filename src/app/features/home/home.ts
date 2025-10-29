import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { SidenavLayoutComponent } from "../../shared/components/sidenav-layout/sidenav-layout.component";

@Component({
  selector: 'app-home',
  imports: [SidenavLayoutComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly auth = inject(AuthService)

  
}
