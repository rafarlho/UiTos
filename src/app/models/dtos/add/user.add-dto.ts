import { BaseFieldsDTO } from "../../generic/base-fields-dto.model";

export interface UserAddDTO extends BaseFieldsDTO {
      fullName: string,
      username: string,
      email: string,
}