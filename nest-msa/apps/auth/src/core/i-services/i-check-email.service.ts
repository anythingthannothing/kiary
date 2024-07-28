export interface ICheckEmailService {
  execute(email: string): Promise<boolean>;
}
