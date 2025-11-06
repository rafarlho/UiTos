import { Component, computed, inject, Signal } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../../api/services/user-service';
import { take } from 'rxjs';
import { User } from '../../models/user/user.model';
import { UserStore } from '../../stores/user.store';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
import { GenericDialogData } from '../../models/generic/generic-dialog-data';
import { GenericDialog } from '../../shared/components/generic-dialog/generic-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Organization, OrganizationFieldNames } from '../../models/organization/organization.model';
import { OrganizationService } from '../../api/services/organization-service';
import { OrganizationFieldsService } from '../../models/organization/organization-fields';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe,
    NgxDotpatternComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly auth = inject(AuthService)

  private readonly userService = inject(UserService)
  private readonly organizationService = inject(OrganizationService)
  private readonly userStore = inject(UserStore)
  private readonly dialog = inject(MatDialog)
  private readonly organizationFields = inject(OrganizationFieldsService).organizationFields
  
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

  createOrganization() {
    const dialogData: GenericDialogData = {
      title: "HOME.CREATE_ORGANIZATION",
      description:"HOME.CREATE_ORGANIZATION_DESCRIPTION",
      formFields: {
        fields: this.organizationFields,
        model: {
          "Owner" : this.userStore.user()
        },
        callback: (data:Organization) => this.organizationService.add(data)
      },
      actions: [{
          text: "CREATE",
          description: "primary",
          isSubmit: true,
          closeDialog: true
        }]
    } 
    const dialogRef = this.dialog.open(GenericDialog, {
      data:dialogData,
    })

    dialogRef.afterClosed().pipe(take(1)).subscribe((result:any) => {
      if(result)
        this.userStore.addOrganization(result)
    })
  }
}
