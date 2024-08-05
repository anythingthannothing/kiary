export interface IEncryptService {
  hash(str: string): Promise<string>;
  compare(str: string, hashedStr: string): Promise<boolean>;
}
