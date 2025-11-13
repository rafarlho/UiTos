import { BaseFields } from "../generic/base-fields.model"
import { Member } from "../member/member.model"
import { Priority } from "../priority/priority.model"

export interface ProductionTask extends BaseFields {
    CreatedBy : Member 
    Priority : Priority 
    Chores: any
}
