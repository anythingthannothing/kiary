export interface PasswordDomain {
  passwordId: number;
  accountId: number;
  hashedPassword: string;
  updatedAt: Date;
}
