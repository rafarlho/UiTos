import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { MemberFieldNames } from './member.model';
import { RoleService } from '../../api/services/role-service';
import { UserService } from '../../api/services/user-service';
import { OrganizationService } from '../../api/services/organization-service';
import { map } from 'rxjs';
import { RoleFieldNames } from '../role/role.model';

@Injectable({
    providedIn: 'root'
})
export class MemberFieldsService {
    private translateService = inject(TranslateService)
    private roleService = inject(RoleService)
    private userService = inject(UserService)
    private organizationService = inject(OrganizationService)

    memberFields : FormlyFieldConfig[] = [
        {
            key: MemberFieldNames.Role,
            type: 'select',
            props: {
                required: true,
                options: this.roleService.getAll().pipe(map(value => value.Items)),
                valueProp: 'Id',
                labelProp: RoleFieldNames.Name
            },
            expressions: {
                'props.label': this.translateService.stream('ROLE'),
            },
        },
        {
            key: MemberFieldNames.User,
            type: 'select',
            props: {
                required: true,
                options: [] //TODO
            },
            expressions: {
                'props.label': this.translateService.stream('USER'),
            },
        },
        {
            key: MemberFieldNames.Organization,
            type: 'select',
            props: {
                required: true,
                options: [] //TODO
            },
            expressions: {
                'props.label': this.translateService.stream('ORGANIZATION'),
            },
        }
    ]
}
