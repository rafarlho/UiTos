import { BaseFields } from "../generic/base-fields.model"
import { Organization } from "../organization/organization.model"

export interface ProductionStation extends BaseFields {
    Name: string    
    Organization : Organization
    Description ?: string
}
