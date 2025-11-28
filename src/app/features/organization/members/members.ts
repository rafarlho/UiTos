import { Component, computed, effect, inject, signal } from '@angular/core';
import { MemberService } from '../../../api/services/organization-member-service';
import { UserStore } from '../../../stores/user.store';
import { Member } from '../../../models/member/member.model';
import buildQuery from 'odata-query'
import { finalize, take } from 'rxjs';
import { MembersTable } from "./members-table";
import { TranslatePipe } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MembersManage } from './members-manage';
@Component({
  selector: 'app-members',
  imports: [
    MembersTable,
    TranslatePipe,
    MatButtonModule,
  ],
  templateUrl: './members.html',
  styleUrl: './members.scss',
})
export class Members {
  private readonly membersService = inject(MemberService)
  private readonly userStore = inject(UserStore)
  private membersManageService = inject(MembersManage)

  members = signal<Member[]>([])
  selectedMembers = signal<Member[]>([])
  refresh = signal<{update: boolean}>({update: false})

  constructor() {
    this.fetchMembers()

    effect(()=> {
      if(this.refresh().update) 
        this.fetchMembers()
    })
  }
  
  setSelection(members: Member[]) {
    this.selectedMembers.set(members)
  }
  
  addMembers() {
    this.membersManageService.addMembers(this.userStore.selectedOrg()!, this.refresh)
  }

  editMembers() {
    this.membersManageService.editMembersRole(this.userStore.selectedOrg()!,this.selectedMembers, this.refresh)
  }

  removeMembers() {
    this.membersManageService.removeMembers(this.selectedMembers, this.refresh)
  }

  fetchMembers() {
    if(!this.userStore.selectedOrg()) return

    const filter = {organizationId : this.userStore.selectedOrg()!.Id}
    const query = buildQuery({filter})
    this.membersService.getAll(query)
    .pipe(
      take(1),
      finalize(()=> this.refresh.set({update: false}),)
    )
    .subscribe({
      next: value => this.members.set(value.Items)
    })
  }
}
