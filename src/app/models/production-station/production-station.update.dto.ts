import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface ProductionStationUpdateDTO extends BaseFieldsDTO {
      name: string
      organizationId: number,
      description?:string
}