import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { StatusFieldNames } from './status.model';

@Injectable({ providedIn: 'root' })
export class StatusFieldsService {
    private translateService = inject(TranslateService)

    statusFields: FormlyFieldConfig[] = [
        {
            key: StatusFieldNames.Name,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('NAME') }
        }
    ]
}
