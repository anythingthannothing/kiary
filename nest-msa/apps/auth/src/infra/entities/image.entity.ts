import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ schema: 'file', name: 'image' })
export class ImageEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'image_id',
    type: 'bigint',
    unsigned: true,
  })
  imageId: string;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @ManyToOne(() => UserEntity, (user) => user.images)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'url', type: 'varchar', nullable: false })
  url: string;

  @Column({ name: 'created_at', type: 'timestamp', nullable: false })
  createdAt: Date;
}
