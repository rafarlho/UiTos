import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { TaskTypeFieldNames } from './task-type.model';

@Injectable({ providedIn: 'root' })
export class TaskTypeFieldsService {
    private translateService = inject(TranslateService)

    taskTypeFields: FormlyFieldConfig[] = [
        {
            key: TaskTypeFieldNames.Name,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('NAME') }
        }
    ]
}
