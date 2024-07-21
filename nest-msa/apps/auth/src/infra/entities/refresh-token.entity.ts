import {
  Column,
  CreateDateColumn,
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

  @ManyToOne(() => UserEntity, (user) => user.accounts)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'token', type: 'char', length: 12 })
  token: string;

  @Column({ name: 'expires_at', type: 'timestamp', nullable: false })
  expiresAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
