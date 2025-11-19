import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductionTaskFieldNames } from './production-task.model';
import { PriorityService } from '../../api/services/priority-service';
import { ChoreService } from '../../api/services/chore-service';
import { map } from 'rxjs';
import { PriorityFieldNames } from '../priority/priority.model';
import { ProductionStationMemberService } from '../../api/services/production-station-member-service';

@Injectable({ providedIn: 'root' })
export class ProductionTaskFieldsService {
    private translateService = inject(TranslateService)
    private memberService = inject(ProductionStationMemberService)
    private priorityService = inject(PriorityService)
    private choreService = inject(ChoreService)

    taskFields: FormlyFieldConfig[] = [
        {
            key: ProductionTaskFieldNames.CreatedBy,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('CREATED_BY') }
        },
        {
            key: ProductionTaskFieldNames.Priority,
            type: 'select',
            props: { 
                options: this.priorityService.getAll().pipe(map(value => value.Items)), 
                valueProp: 'Id',
                labelProp: PriorityFieldNames.Name
            },
            expressions: { 'props.label': this.translateService.stream('PRIORITY') }
        },
        {
            key: ProductionTaskFieldNames.Chores,
            type: 'select',
            props: { options: [], multiple: true }, //TODO
            expressions: { 'props.label': this.translateService.stream('CHORES') }
        }
    ]
}
