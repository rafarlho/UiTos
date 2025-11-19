import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ChoreFieldNames } from './chore.model';
import { ProductionTaskService } from '../../api/services/production-task-service';
import { ProductionStationService } from '../../api/services/production-station-service';
import { ProductionStationMemberService } from '../../api/services/production-station-member-service';
import { TaskTypeService } from '../../api/services/task-type-service';
import { StatusService } from '../../api/services/status-service';
import { map } from 'rxjs';
import { TaskTypeFieldNames } from '../task-type/task-type.model';

@Injectable({ providedIn: 'root' })
export class ChoreFieldsService {
    private translateService = inject(TranslateService)
    private productionTaskService = inject(ProductionTaskService)
    private productionStationService = inject(ProductionStationService)
    private productionStationMemberService = inject(ProductionStationMemberService)
    private taskTypeService = inject(TaskTypeService)
    private statusService = inject(StatusService)

    choreFields: FormlyFieldConfig[] = [
        {
            key: ChoreFieldNames.ProductionTask,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('PRODUCTION_TASK') }
        },
        {
            key: ChoreFieldNames.ProductionStation,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('PRODUCTION_STATION') }
        },
        {
            key: ChoreFieldNames.ProductionStationMember,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('PRODUCTION_STATION_MEMBER') }
        },
        {
            key: ChoreFieldNames.TaskType,
            type: 'select',
            props: { options: this.taskTypeService.getAll().pipe(map(value => value.Items)), labelProp: TaskTypeFieldNames.Name, valueProp:"Id" },
            expressions: { 'props.label': this.translateService.stream('TASK_TYPE') }
        },
        {
            key: ChoreFieldNames.Status,
            type: 'select',
            props: { options: this.statusService.getAll().pipe(map(value => value.Items)), labelProp: TaskTypeFieldNames.Name, valueProp:"Id"  },
            expressions: { 'props.label': this.translateService.stream('STATUS') }
        },
        {
            key: ChoreFieldNames.Title,
            type: 'input',
            props: { required: true },
            expressions: { 'props.label': this.translateService.stream('TITLE') }
        },
        {
            key: ChoreFieldNames.Description,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('DESCRIPTION') }
        },
        {
            key: ChoreFieldNames.ScheduledTo,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('SCHEDULED_TO') }
        },
        {
            key: ChoreFieldNames.StartedOn,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('STARTED_ON') }
        },
        {
            key: ChoreFieldNames.FinishedOn,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('FINISHED_ON') }
        },
        {
            key: ChoreFieldNames.EstimatedDuration,
            type: 'input',
            props: {},
            expressions: { 'props.label': this.translateService.stream('ESTIMATED_DURATION') }
        }
    ]
}
