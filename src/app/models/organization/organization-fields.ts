import { FormlyFieldConfig } from "@ngx-formly/core";
import { OrganizationFields } from "./organization.model";

export const organizationFields : FormlyFieldConfig[] = 
[
    {
        key: OrganizationFields.Name,
        type: 'input',
        props: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
        }
    },
    {
        key: OrganizationFields.Description,
        type: 'input',
        props: {
            label: 'Descrip',
            placeholder: 'Enter email',
            required: true,
        }
    },
    {
        key: OrganizationFields.Location,
        type: 'input',
        props: {
            label: 'Location',
            placeholder: 'Enter email',
            required: true,
        }
    }
]