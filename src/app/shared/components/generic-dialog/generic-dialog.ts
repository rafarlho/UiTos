import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormlyModule } from '@ngx-formly/core';
import { DialogAction, GenericDialogData } from '../../../models/generic/generic-dialog-data';
import { TranslatePipe } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { finalize, Observable, take, tap } from 'rxjs';

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
    
    // 1. Usa uma verificação mais segura para Observable
    if (result instanceof Observable) { 
        
        console.log("Observable detectado. A subscrever...");
        
        result.pipe(
            take(1),
            tap(data => console.log("TAP: Dados recebidos!", data)), // Verifica se chega aqui
            finalize(() => console.log("FINALIZE: Observable Terminou.")) // Verifica se termina
        ).subscribe({
            next: (response) => {
                console.log("NEXT: Resposta Recebida!", action, response);
                if (action.closeDialog !== false) {
                    this.dialogRef.close(response); 
                }
            },
            error: (err) => {
                console.error("ERRO na Observable:", err); // Verifica se chega aqui
                // TODO HANDLE ERRORS!!! (Boa prática é fechar com erro ou mostrar notificação)
            }
        });
    } else {
        console.log("Resultado não-Observable. Fechando:", result);
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
