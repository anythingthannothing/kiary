export interface ITokenService {
  sign(params: any): Promise<any>;
  verify(params: any): Promise<any>;
  generateRefreshToken(length: number): Promise<string>;
}
