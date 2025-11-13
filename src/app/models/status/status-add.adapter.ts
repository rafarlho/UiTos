import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Status } from "./status.model";
import { StatusAddDTO } from "./status.add.dto";

@Injectable({
    providedIn: 'root'
})
export class StatusAddAdapter implements ModelAdapter<Status , StatusAddDTO> {
    adapt = (entity: Status): StatusAddDTO => 
    ({
        name: entity.Name
    });

    adaptArray = (entities: Status[]): StatusAddDTO[] => 
        entities.map(entity => this.adapt(entity));
}