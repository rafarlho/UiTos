import { BaseFields } from "../generic/base-fields.model"

export interface Role extends BaseFields {
    Name: string    
}

export const RoleFieldNames = {
    Name: "Name",
}
