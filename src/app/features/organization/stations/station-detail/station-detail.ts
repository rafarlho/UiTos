import { Component, effect, EventEmitter, inject, input, linkedSignal, signal, WritableSignal } from '@angular/core';
import { ProductionStation } from '../../../../models/production-station/production-station.model';
import {CompactType, DisplayGrid, GridsterComponent, GridsterComponentInterface, GridsterConfig, GridsterItem, GridsterItemComponent, GridsterModule, GridType} from 'angular-gridster2';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductionStationService } from '../../../../api/services/production-station-service';
import buildQuery from 'odata-query'
import { ProductionStationMember } from '../../../../models/production-station-member/production-station-member.model';
import { Odata } from '../../../../models/odata/odata.model';
import { ProductionStationMemberService } from '../../../../api/services/production-station-member-service';
import { take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ProductionTaskService } from '../../../../api/services/production-task-service';
import { ProductionTask } from '../../../../models/production-task/production-task.model';
@Component({
  selector: 'app-station-detail',
  imports: [
    GridsterModule, 
    MatCardModule,
    TranslatePipe,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './station-detail.html',
  styleUrl: './station-detail.scss',
  host: {
    'class': 'flex h-full'
  }
})
export class StationDetail {
  displayedColumns: string[] = ['name', 'role'];
  station = input.required<ProductionStation>();
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();

  private readonly productionStationService = inject(ProductionStationMemberService)
  private readonly tasksService = inject(ProductionTaskService)
  members : WritableSignal<ProductionStationMember[]> = signal([])
  tasks : WritableSignal<ProductionTask[]> = signal([])
  
  constructor() {
    effect(()=> {
      if(this.station())
        this.fetchMembers()
        this.fetchTasks()
    })
  }
  dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0, type: 'StationData' },
      { cols: 2, rows: 2, y: 0, x: 2, type: 'Members' },
      { cols: 2, rows: 1, y: 1, x: 0, type: 'Tasks' },
      { cols: 2, rows: 1, y: 1, x: 0, type: 'Graph' }
    ];

  options : GridsterConfig = {
      gridType: GridType.Fit,
      api: {} as GridsterComponentInterface,
      // displayGrid: DisplayGrid.Always,
      // disableWindowResize: false,
      // scrollToNewItems: false,
      // disableWarnings: false,
      // ignoreMarginInRow: false,
      
    }

    fetchMembers() {
      this.productionStationService.getDetailedByStationId(this.station().Id).pipe(take(1)).subscribe({
        next: (members: ProductionStationMember[]) => this.members.set(members)
      })
    }

    fetchTasks() {
      const filter = {productionStationId: this.station().Id}
      const query = buildQuery({filter})
      this.tasksService.GetAllDetailed(query).pipe(take(1)).subscribe({
        next: (tasks: Odata<ProductionTask>) => this.tasks.set(tasks.Items)
      })
    }

    addMembers() {
      console.log(this.members())
    }
}
