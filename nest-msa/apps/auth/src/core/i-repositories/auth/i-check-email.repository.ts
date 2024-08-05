export interface ICheckEmailRepository {
  execute(email: string): Promise<boolean>;
}
