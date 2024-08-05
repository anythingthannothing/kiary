import { UserDomain } from '../domain';

export interface SignupServiceInputDto {
  email: string;
  password: string;
  nickname: string;
}

export interface ISignUpService {
  execute(dto: SignupServiceInputDto): Promise<UserDomain>;
}
