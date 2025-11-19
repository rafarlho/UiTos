import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { PriorityFieldNames } from './priority.model';

@Injectable({ providedIn: 'root' })
export class PriorityFieldsService {
    private translateService = inject(TranslateService)

    priorityFields: FormlyFieldConfig[] = [
        {
            key: PriorityFieldNames.Name,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('NAME') }
        }
    ]
}
