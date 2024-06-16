import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccountEntity } from './account.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'user_id',
    type: 'integer',
    unsigned: true,
  })
  userId: number;

  @Column('varchar', {
    name: 'email',
    length: 50,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('varchar', {
    name: 'nickname',
    nullable: false,
    unique: true,
    length: 36,
  })
  nickname: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @OneToMany(() => AccountEntity, (account) => account.user)
  accounts: AccountEntity[];
}
