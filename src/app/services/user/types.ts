import {ServiceResponse} from "../api";
import {Users} from "@models";

export interface UserServiceType {
  getUsers: () => Promise<ServiceResponse<Users>>;
}
