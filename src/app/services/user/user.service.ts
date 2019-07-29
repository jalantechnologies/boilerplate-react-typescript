import {ServiceResponse} from "../api";
import {Users} from "@models";

export interface UserService {
  getUsers: () => Promise<ServiceResponse<Users>>;
}
