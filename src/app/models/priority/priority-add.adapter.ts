import { Injectable } from "@angular/core";
import { ModelAdapter } from "../../core/contracts/model-adapter";
import { Priority } from "./priority.model";
import { PriorityAddDTO } from "./priority.add.dto";

@Injectable({
    providedIn: 'root'
})
export class PriorityAddAdapter implements ModelAdapter<Priority , PriorityAddDTO> {
    adapt = (entity: Priority): PriorityAddDTO => 
    ({
        name: entity.Name
    });

    adaptArray = (entities: Priority[]): PriorityAddDTO[] => 
        entities ? entities.map(entity => this.adapt(entity)) : []
}