import { Component, inject } from '@angular/core';
import { SidenavLayoutComponent } from "../../shared/components/sidenav-layout/sidenav-layout.component";
import { UserStore } from '../../stores/user.store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-organization',
  imports: [
    SidenavLayoutComponent,
    RouterOutlet
],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization {
  protected readonly userStore = inject(UserStore)
}
