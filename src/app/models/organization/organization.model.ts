import { BaseFields } from "../generic/base-fields.model"
import { ProductionStation } from "../production-station/production-station.model"
import { User } from "../user/user.model"

export interface Organization extends BaseFields {
    Name: string,
    Description: string,
    Location:string
    Owner?: User
    Stations: ProductionStation[]
}

export const OrganizationFieldNames = {
    Name: "Name",
    Description: "Description",
    Location: "Location",
    Owner: "Owner"
}
