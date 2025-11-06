import { BaseFields } from "../generic/base-fields.model"
import { User } from "../user/user.model"

export interface Organization extends BaseFields {
    Name: string,
    Description: string,
    Location:string
    Owner?: User
}

export const OrganizationFieldNames = {
    Name: "Name",
    Description: "Description",
    Location: "Location",
    Owner: "Owner"
}
