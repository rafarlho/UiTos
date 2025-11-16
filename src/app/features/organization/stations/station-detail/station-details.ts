import { Injectable } from '@angular/core';
import { GenericDialogData } from '../../../../models/generic/generic-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class StationDetails {
    addMember() {
        // const dialogData: GenericDialogData = {
        //   title: "HOME.CREATE_STATION",
        //   description:"HOME.CREATE_ORGANIZATION_STATION",
        //   formFields: {
        //     fields: this.stationFields,
        //     model: {
        //       "Organization" : this.userStore.selectedOrg(),
        //       "Members": []
        //     },
        //     callback: (data:ProductionStation) => this.stationService.add(data)
        //   },
        //   actions: [{
        //       text: "CREATE",
        //       description: "primary",
        //       isSubmit: true,
        //       closeDialog: true
        //     }]
        // } 
        // const dialogRef = this.dialog.open(GenericDialog, {
        //   data:dialogData,
        // })
    
        // dialogRef.afterClosed().pipe(take(1)).subscribe((result:any) => {
        //   if(result)
        //     this.stations.set([...this.stations(), result])
        // })
      }
}
