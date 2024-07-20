import { UserEntity } from '../../infra/entities';

export interface SignupServiceInputDto {
  email: string;
  password: string;
}

export interface ISignUpService {
  execute(dto: SignupServiceInputDto): Promise<UserEntity>;
}
