import { BaseFieldsDTO } from "../generic/base-fields-dto.model";
import { MemberResultDTO } from "../member/member.result-dto";
import { ProductionStationResultDTO } from "../production-station/production-station.result-dto";

export interface ProductionStationMemberResultDTO extends BaseFieldsDTO {
      organizationMember: MemberResultDTO,
      productionStation:  ProductionStationResultDTO
}