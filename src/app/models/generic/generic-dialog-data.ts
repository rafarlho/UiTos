import { FormlyFieldConfig } from "@ngx-formly/core"
import { Observable } from "rxjs"

export interface GenericDialogData {
    title: string
    description?: string
    formFields?:  {
        fields: FormlyFieldConfig[]
        model?: any
        callback: (value: any) => any | Observable<any>
    }
    actions?: DialogAction[]
}

export interface DialogAction {
    text: string
    description?: 'primary' | 'accent' | 'warn'
    callback?: (value: any) => any | Observable<any>
    closeDialog?: boolean
    isSubmit?: boolean
}