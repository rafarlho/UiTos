import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { OrganizationFieldNames } from './organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationFieldsService {
  private translateService = inject(TranslateService)
  organizationFields : FormlyFieldConfig[] = 
  [
      {
          key: OrganizationFieldNames.Name,
          type: 'input',
          props: {
              required: true,
          },
          expressions: {
              'props.label': this.translateService.stream('NAME'),
          },
      },
      {
          key: OrganizationFieldNames.Description,
          type: 'input',
          props: {
              required: true,
          },
          expressions: {
              'props.label': this.translateService.stream('DESCRIPTION'),
          },
      },
      {
          key: OrganizationFieldNames.Location,
          type: 'input',
          props: {
              required: true,
          },
          expressions: {
              'props.label': this.translateService.stream('LOCATION'),
          },
      }
  ]
}
