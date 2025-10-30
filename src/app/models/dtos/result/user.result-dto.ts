import { BaseFieldsDTO } from "../../generic/base-fields-dto.model";

export interface UserResultDTO extends BaseFieldsDTO {
      fullName: string,
      userName: string,
      email: string,
      latestLogin?: Date,
}