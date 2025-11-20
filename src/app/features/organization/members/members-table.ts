import { Component, inject, input, output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { Member } from '../../../models/member/member.model';
import { SelectionModel } from '@angular/cdk/collections';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-members-table',
  imports: [
    MatTableModule, 
    MatCheckboxModule,
    TranslatePipe
  ],
  template: `
  <table mat-table [dataSource]="dataSource()" class="mat-elevation-z8">

    <!-- Checkbox Column -->
    <ng-container matColumnDef="select">
      <th mat-header-cell *matHeaderCellDef>
        <mat-checkbox (change)="$event ? toggleAllRows() : null"
                      [checked]="selection.hasValue() && isAllSelected()"
                      [indeterminate]="selection.hasValue() && !isAllSelected()"
                      [aria-label]="checkboxLabel()">
        </mat-checkbox>
      </th>
      <td mat-cell *matCellDef="let row">
        <mat-checkbox (click)="$event.stopPropagation()"
                      (change)="$event ? toggleRow(row) : null"
                      [checked]="selection.isSelected(row)"
                      [aria-label]="checkboxLabel(row)">
        </mat-checkbox>
      </td>
    </ng-container>

    <ng-container matColumnDef="fullName">
      <th mat-header-cell *matHeaderCellDef> {{ "FULL_NAME" | translate}} </th>
      <td mat-cell *matCellDef="let orgMember"> {{orgMember.User.FullName}} </td>
    </ng-container>

    <ng-container matColumnDef="email">
      <th mat-header-cell *matHeaderCellDef> {{ "EMAIL" | translate}} </th>
      <td mat-cell *matCellDef="let orgMember"> {{orgMember.User.Email}} </td>
    </ng-container>

    <ng-container matColumnDef="username">
      <th mat-header-cell *matHeaderCellDef> {{ "USERNAME" | translate}} </th>
      <td mat-cell *matCellDef="let orgMember"> {{orgMember.User.Username}} </td>
    </ng-container>

    <ng-container matColumnDef="role">
      <th mat-header-cell *matHeaderCellDef> {{ "ROLE" | translate}} </th>
      <td mat-cell *matCellDef="let orgMember"> {{orgMember.Role.Name}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;">
    </tr>
  </table>
  `,
  styles: ``,
})
export class MembersTable {
  displayedColumns: string[] = ['select', 'fullName', 'email', 'username', 'role'];
  dataSource = input.required<Member[]>()
  selection = new SelectionModel<Member>(true, []);
  selectionOut = output<Member[]>()

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource().length;
    return numSelected === numRows;
  }

  toggleRow(row: Member) {
    this.selection.toggle(row)
    this.emitSelection()
  }

  emitSelection() {
    this.selectionOut.emit(this.selection.selected)
  }
  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear()
      this.emitSelection()
      return;
    }
    this.selection.select(...this.dataSource());
    this.emitSelection()
  }

  checkboxLabel(row?: Member): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id}`;
  }
}
