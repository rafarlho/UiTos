import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormlyModule } from '@ngx-formly/core';
import { DialogAction, GenericDialogData } from '../../../models/generic/generic-dialog-data';
import { TranslatePipe } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-generic-dialog',
  imports: [
    TranslatePipe,
    MatDialogModule,
    FormlyModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './generic-dialog.html',
  styleUrl: './generic-dialog.scss',
})
export class GenericDialog {
  readonly dialogRef = inject(MatDialogRef<GenericDialog>)
  readonly data: GenericDialogData = inject(MAT_DIALOG_DATA)

  form = new FormGroup({})
  model = this.data.formFields?.model ?? {}

executeAction(action: DialogAction) {
    if (!action.callback) return;
    const result = action.callback(this.model);
    if (result && typeof (result as Observable<any>).subscribe === 'function') {
      
      (result as Observable<any>).pipe(take(1),tap(data => console.log(data))).subscribe({
        next: (response) => {
          if (action.closeDialog !== false) {
            this.dialogRef.close(response); 
          }
        },
        error: (err) => {
          //TODO HANDLE ERRORS!!!
        }
      });
    } else {
      if (action.closeDialog !== false) {
        this.dialogRef.close(result); 
      }
    }
  }

  submitFormly() {
    if (this.data.formFields && this.data.formFields.callback && this.form.valid) {
      const tempAction: DialogAction = { 
        text: 'SUBMIT', 
        callback: this.data.formFields.callback,
        closeDialog: true 
      };
      this.executeAction(tempAction);
    }
  }
}
