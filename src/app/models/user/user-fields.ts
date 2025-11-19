import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { UserFieldNames } from './user.model';
import { OrganizationService } from '../../api/services/organization-service';
import { map } from 'rxjs';
import { OrganizationFieldNames } from '../organization/organization.model';

@Injectable({ providedIn: 'root' })
export class UserFieldsService {
    private translateService = inject(TranslateService)
    private organizationService = inject(OrganizationService)

    userFields: FormlyFieldConfig[] = [
        {
            key: UserFieldNames.FullName,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('FULL_NAME') }
        },
        {
            key: UserFieldNames.Email,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('EMAIL') }
        },
        {
            key: UserFieldNames.UserName,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('USER_NAME') }
        },
        {
            key: UserFieldNames.LatestLogin,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('LATEST_LOGIN') }
        },
        {
            key: UserFieldNames.Organizations,
            type: 'select',
            props: { 
                options: this.organizationService.getAll().pipe(map(value => value.Items)), 
                multiple: true,
                labelProp: OrganizationFieldNames.Name,
                valueProp: 'Id'
            },
            expressions: { 'props.label': this.translateService.stream('ORGANIZATIONS') }
        }
    ]
}
