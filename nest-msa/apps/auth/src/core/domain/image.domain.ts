import { UserDomain } from './user.domain';

export interface ImageDomain {
  imageId: string;
  userId: string;
  user?: UserDomain;
  url: string;
  createdAt: Date;
}
