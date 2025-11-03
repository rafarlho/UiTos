import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface OrganizationUpdateDTO extends BaseFieldsDTO {
      name: string,
      description: string,
      location: string,
      ownerId?: number
}