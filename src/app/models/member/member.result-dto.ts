import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { OrganizationResultDTO } from "../organization/organization.result-dto";
import { RoleResultDTO } from "../role/role.result-dto";
import { UserResultDTO } from "../user/user.result-dto";

export interface MemberResultDTO extends BaseFieldsDTO {
      role: RoleResultDTO
      user: UserResultDTO
      organization: OrganizationResultDTO
}