import { BaseFields } from "../generic/base-fields.model"
import { ProductionStationMember } from "../production-station-member/production-station-member.model"
import { ProductionStation } from "../production-station/production-station.model"
import { ProductionTask } from "../production-task/production-task.model"
import { Status } from "../status/status.model"
import { TaskType } from "../task-type/task-type.model"

export interface Chore extends BaseFields {
    ProductionTask: ProductionTask
    ProductionStation: ProductionStation,
    ProductionStationMember: ProductionStationMember
    TaskType: TaskType
    Status: Status
    Title: string
    Description?:string
    ScheduledTo?: Date,
    StartedOn?:Date
    FinishedOn?: Date
    EstimatedDuration?: number
}
