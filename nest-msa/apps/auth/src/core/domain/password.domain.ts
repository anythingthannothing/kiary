export interface PasswordDomain {
  passwordId: number;
  accountId: number;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
