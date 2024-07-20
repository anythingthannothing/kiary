import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { PasswordEntity } from './password.entity';
import { AuthProviderEnum } from '../../core/const/enums/auth-provider.enum';

@Entity('account')
export class AccountEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'account_id',
    type: 'int',
    unsigned: true,
  })
  accountId: number;

  @ManyToOne(() => UserEntity, (user) => user.accounts)
  user: UserEntity;

  @OneToOne(() => PasswordEntity, (password) => password.account)
  password: PasswordEntity;

  @Column({ name: 'provider', enum: Object.values(AuthProviderEnum) })
  provider: AuthProviderEnum;
}
