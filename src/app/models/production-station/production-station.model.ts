import { BaseFields } from "../generic/base-fields.model"
import { Organization } from "../organization/organization.model"
import { ProductionStationMember } from "../production-station-member/production-station-member.model"

export interface ProductionStation extends BaseFields {
    Name: string    
    Organization? : Organization
    Description ?: string
    Members: ProductionStationMember[]   
}

export const ProductionStationFieldNames = {
    Name: "Name",
    Description: "Description",
    Organization: "Organization",
    Members: "Members"
}
