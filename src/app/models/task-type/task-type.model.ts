import { BaseFields } from "../generic/base-fields.model"

export interface TaskType extends BaseFields {
    Name: string    
}

export const TaskTypeFieldNames = {
    Name: "Name",
}
