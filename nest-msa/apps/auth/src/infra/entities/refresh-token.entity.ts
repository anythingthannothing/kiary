import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('refresh_token')
export class RefreshTokenEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'refresh_token_id',
    type: 'bigint',
    unsigned: true,
  })
  refreshTokenId: string;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  user_id: number;

  @ManyToOne(() => UserEntity, (user) => user.accounts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'token', type: 'char', length: 12 })
  token: string;

  @Column({ name: 'expires_at', type: 'timestamp', nullable: false })
  expiresAt: Date;

  @Column({ name: 'is_valid', type: 'bit', nullable: false })
  isValid: boolean;
}
