import { BaseFields } from "../generic/base-fields.model"

export interface Priority extends BaseFields {
    Name: string    
}

export const PriorityFieldNames = {
    Name: "Name",
}
