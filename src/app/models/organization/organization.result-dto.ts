import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { UserResultDTO } from "../user/user.result-dto";

export interface OrganizationResultDTO extends BaseFieldsDTO {
      name: string,
      description: string,
      location: string,
      owner?: UserResultDTO,
}