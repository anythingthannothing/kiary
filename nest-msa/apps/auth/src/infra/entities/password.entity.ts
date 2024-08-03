import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity('password')
export class PasswordEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'password_id',
    type: 'int',
    unsigned: true,
  })
  passwordId: number;

  @Column({ name: 'account_id', type: 'int', nullable: false })
  accountId: number;

  @OneToOne(() => AccountEntity, (account) => account.password, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;

  @Column({
    name: 'hashed_password',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  hashedPassword: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
