import { BaseFields } from "../generic/base-fields.model"

export interface Status extends BaseFields {
    Name: string    
}

export const StatusFieldNames = {
    Name: "Name",
}
