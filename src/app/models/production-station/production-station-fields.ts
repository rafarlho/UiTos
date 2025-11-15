import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductionStationFieldNames } from './production-station.model';

@Injectable({
    providedIn: 'root'
})

export class ProductionStationFieldsService {
    private translateService = inject(TranslateService)

    stationFields : FormlyFieldConfig[] = 
    [
        {
            key: ProductionStationFieldNames.Name,
            type: 'input',
            props: {
                required: true,
            },
            expressions: {
                'props.label': this.translateService.stream('NAME'),
            },
        },
        {
            key: ProductionStationFieldNames.Description,
            type: 'input',
            props: {
                required: true,
            },
            expressions: {
                'props.label': this.translateService.stream('DESCRIPTION'),
            },
        },
    ]
}
