import { BaseFields } from "../generic/base-fields.model"

export interface User extends BaseFields {
    FullName: string,
    Email: string,
    UserName:string
    LatestLogin?: Date
}
