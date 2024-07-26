import { LOGIN, LOGOUT, PROFILE, REGISTER } from "../constants/endpoints";
import { UserType } from "../models/user";
import { ApiResponseType, fetcher } from "./index2";

type RegisterParamsType = {
  name: string;
  email: string;
  password: string;
};

type LoginParamsType = {
  email: string;
  password: string;
};

const register = async (
  body: RegisterParamsType
): Promise<ApiResponseType<any>> =>
  fetcher({
    method: "post",
    url: REGISTER,
    body: { name: body.name, email: body.email, password: body.password },
  });

const login = async (body: LoginParamsType): Promise<ApiResponseType<any>> =>
  fetcher({
    method: "post",
    url: LOGIN,
    body: { email: body.email, password: body.password },
  });

const logout = async (): Promise<ApiResponseType<void>> =>
  fetcher({
    method: "get",
    url: LOGOUT,
  });

const getProfile = async (): Promise<ApiResponseType<UserType>> =>
  fetcher({
    method: "get",
    url: PROFILE,
  });

export { register, login, logout, getProfile };