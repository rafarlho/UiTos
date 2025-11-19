import { BaseFields } from "../generic/base-fields.model"
import { Organization } from "../organization/organization.model"
import { Role } from "../role/role.model"
import { User } from "../user/user.model"

export interface Member extends BaseFields {
    Role: Role
    User: User
    Organization: Organization
}

export const MemberFieldNames = {
    Role: "Role",
    User: "User",
    Organization: "Organization",
}
