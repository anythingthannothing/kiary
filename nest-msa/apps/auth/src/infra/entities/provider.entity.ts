import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';
import { AuthProviderEnum } from '../../core/const/enums/auth-provider.enum';

@Entity({ schema: 'auth', name: 'provider' })
export class ProviderEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'provider_id',
    type: 'int',
    unsigned: true,
  })
  providerId: number;

  @Column({ name: 'account_id', type: 'int', unsigned: true, nullable: false })
  accountId: number;

  @ManyToOne(() => AccountEntity, (account) => account.providers)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;

  @Column({
    name: 'name',
    type: 'enum',
    enum: Object.values(AuthProviderEnum),
  })
  name: string;

  @Column({
    name: 'access_token',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  accessToken: string;

  @Column({
    name: 'ac_expires_at',
    type: 'timestamp',
    nullable: false,
  })
  accessTokenExpiresAt: Date;

  @Column({
    name: 'refresh_token',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  refreshToken: string;

  @Column({
    name: 'rt_expires_at',
    type: 'timestamp',
    nullable: false,
  })
  refreshTokenExpiresAt: Date;

  @Column({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date;
}
