export interface UserDomain {
  userId: number;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
