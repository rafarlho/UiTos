import { inject, Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductionStationMemberFieldNames } from './production-station-member.model';
import { ProductionStationService } from '../../api/services/production-station-service';
import { ProductionStationMemberService } from '../../api/services/production-station-member-service';

@Injectable({ providedIn: 'root' })
export class ProductionStationMemberFieldsService {
    private translateService = inject(TranslateService)
    private memberService = inject(ProductionStationMemberService)
    private productionStationService = inject(ProductionStationService)

    stationMemberFields: FormlyFieldConfig[] = [
        {
            key: ProductionStationMemberFieldNames.Member,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('MEMBER') }
        },
        {
            key: ProductionStationMemberFieldNames.ProductionStation,
            type: 'select',
            props: { options: [] }, //TODO
            expressions: { 'props.label': this.translateService.stream('PRODUCTION_STATION') }
        }
    ]

    constructor(){
        this.memberService.getAll().subscribe(r => {
            const opts = (r.Items||[]).map((i:any) => ({ label: i.FullName || i.UserName || i.Name || '', value: i }));
            const f:any = this.stationMemberFields.find(x => x.key === ProductionStationMemberFieldNames.Member);
            if(f) f.props = { ...f.props, options: opts };
        })

        this.productionStationService.getAll().subscribe(r => {
            const opts = (r.Items||[]).map((i:any) => ({ label: i.Name || '', value: i }));
            const f:any = this.stationMemberFields.find(x => x.key === ProductionStationMemberFieldNames.ProductionStation);
            if(f) f.props = { ...f.props, options: opts };
        })
    }
}
