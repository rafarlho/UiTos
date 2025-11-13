import { BaseFields } from "../generic/base-fields.model"
import { Member } from "../member/member.model"
import { ProductionStation } from "../production-station/production-station.model"

export interface ProductionStationMember extends BaseFields {
    Member : Member 
    ProductionStation : ProductionStation 
}
