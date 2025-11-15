import { Component, inject, linkedSignal, Signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { UserStore } from '../../../stores/user.store';
import { OrganizationService } from '../../../api/services/organization-service';
import { map, take } from 'rxjs';
import { Organization } from '../../../models/organization/organization.model';
import {toSignal} from "@angular/core/rxjs-interop"
import { TranslatePipe } from '@ngx-translate/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { GenericDialogData } from '../../../models/generic/generic-dialog-data';
import { ProductionStationFieldsService } from '../../../models/production-station/production-station-fields';
import { ProductionStationService } from '../../../api/services/production-station-service';
import { ProductionStation } from '../../../models/production-station/production-station.model';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialog } from '../../../shared/components/generic-dialog/generic-dialog';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-stations',
  imports: [
    TranslatePipe,
    MatToolbar,
    MatButtonModule,
    MatTabsModule
],
  templateUrl: './stations.html',
  styleUrl: './stations.scss',
  encapsulation: ViewEncapsulation.None
})
export class Stations {
  private userStore = inject(UserStore)
  private organizationService = inject(OrganizationService)
  private stationService = inject(ProductionStationService)
  private dialog = inject(MatDialog)
  private readonly stationFields = inject(ProductionStationFieldsService).stationFields
  stationFetcehed = toSignal(this.organizationService.getDetailedById(this.userStore.selectedOrg()!.Id).pipe(map((org: Organization) => org.Stations || [])))
  
  stations : WritableSignal<ProductionStation[]> = linkedSignal(()=> this.stationFetcehed() || [])

  createStation() {
    console.log(this.stations())
      const dialogData: GenericDialogData = {
        title: "HOME.CREATE_STATION",
        description:"HOME.CREATE_ORGANIZATION_STATION",
        formFields: {
          fields: this.stationFields,
          model: {
            "Organization" : this.userStore.selectedOrg(),
            "Members": []
          },
          callback: (data:ProductionStation) => this.stationService.add(data)
        },
        actions: [{
            text: "CREATE",
            description: "primary",
            isSubmit: true,
            closeDialog: true
          }]
      } 
      const dialogRef = this.dialog.open(GenericDialog, {
        data:dialogData,
      })
  
      dialogRef.afterClosed().pipe(take(1)).subscribe((result:any) => {
        if(result)
          this.stations.set([...this.stations(), result])
      })
    }
}
