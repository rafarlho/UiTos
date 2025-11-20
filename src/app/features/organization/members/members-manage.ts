import { inject, Injectable, WritableSignal } from '@angular/core';
import { MemberService } from '../../../api/services/organization-member-service';
import { Member, MemberFieldNames } from '../../../models/member/member.model';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogData } from '../../../models/generic/generic-dialog-data';
import { OrganizationFieldsService } from '../../../models/organization/organization-fields';
import { MemberFieldsService } from '../../../models/member/member-fields';
import { GenericDialog } from '../../../shared/components/generic-dialog/generic-dialog';
import { of, take } from 'rxjs';
import { Organization } from '../../../models/organization/organization.model';
import { Role } from '../../../models/role/role.model';

@Injectable({
  providedIn: 'root'
})
export class MembersManage {
  private membersService = inject(MemberService)
  private dialog = inject(MatDialog)
  private membersFields = inject(MemberFieldsService).memberFields

  addMembers(organization: Organization, refreshSignal: WritableSignal<Object>) {
    const dialogData: GenericDialogData = {
      title: "CREATE_MEMBER",
      description:"CREATE_MEMBER_DESCRIPTION",
      formFields: {
        fields: this.membersFields,
        model: {
          "Organization" : organization,
        },
        callback: (data:Member) => this.membersService.add(data)
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
        refreshSignal.set({update:true})
    })
  }


  editMembersRole(organization: Organization,selectedMembers: WritableSignal<Member[]>, refreshSignal: WritableSignal<Object>) {
    const dialogData: GenericDialogData = {
      title: "UPDATE_ROLES",
      description:"UPDATE_ROLES_DESCRIPTION",
      formFields: {
        fields: this.membersFields.filter(value => value.key === MemberFieldNames.Role+ ".Id"),
        callback: (object: {Role:Role}) => {
          const updatedList = selectedMembers().map(member => ({...member, Role: object.Role, Organization: organization}))
          console.log(updatedList)
          return this.membersService.updateMultiple(updatedList)
        }
      },
      actions: [{
          text: "UPDATE",
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
        refreshSignal.set({update:true})
    })
  }
}
