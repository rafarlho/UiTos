import { BaseFieldsDTO } from "../../generic/base-fields-dto.model";

export interface UserUpdateDTO extends BaseFieldsDTO {
      fullName: string,
      username: string,
      email: string,
}