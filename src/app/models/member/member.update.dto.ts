import { BaseFieldsDTO } from "../generic/base-fields-dto.model";

export interface MemberUpdateDTO extends BaseFieldsDTO {
      organizationId: number,
      roleId: number,
      userId: number
}