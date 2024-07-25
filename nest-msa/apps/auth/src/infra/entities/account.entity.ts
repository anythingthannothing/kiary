import {
  Column,
  Entity,
  JoinColumn,
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

  @Column({ name: 'user_id', type: 'int', unsigned: true, nullable: false })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.accounts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 50,
  })
  email: string;

  @OneToOne(() => PasswordEntity, (password) => password.account)
  password: PasswordEntity;

  @Column({
    name: 'provider',
    type: 'enum',
    enum: Object.values(AuthProviderEnum),
  })
  provider: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'deleted_at',
    type: 'timestamp',
  })
  deletedAt: Date;
}
