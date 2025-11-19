import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { RoleFieldNames } from './role.model';

@Injectable({ providedIn: 'root' })
export class RoleFieldsService {
    private translateService = inject(TranslateService)

    roleFields: FormlyFieldConfig[] = [
        {
            key: RoleFieldNames.Name,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('NAME') }
        }
    ]
}
