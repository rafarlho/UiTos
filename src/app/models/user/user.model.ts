import { BaseFields } from "../generic/base-fields.model"
import { Organization } from "../organization/organization.model"

export interface User extends BaseFields {
    FullName: string,
    Email: string,
    UserName:string
    LatestLogin?: Date
    Organizations?: Organization[]
}
