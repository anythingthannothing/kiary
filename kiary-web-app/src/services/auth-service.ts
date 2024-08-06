import { Api } from '@/shared/utils/api';
import { endPoints } from '@/shared/const/end-points';
import { debugLog } from '@/shared/utils/debug-log';

export class AuthService {
  static async signUp(params: {
    email: string;
    password: string;
    nickname: string;
  }) {
    try {
      return await Api.post(endPoints.auth.SIGN_UP_URL, params);
    } catch (err: any) {
      debugLog(err.message);
      throw new Error(err.message);
    }
  }
  static async login(params: { email: string; password: string }) {
    try {
      return await Api.post(endPoints.auth.LOGIN_URL, params);
    } catch (err: any) {
      debugLog(err.message);
      throw new Error(err.message);
    }
  }

  static async logout() {
    try {
      return await Api.get(endPoints.auth.LOGOUT_URL);
    } catch (err: any) {
      debugLog(err.message);
      throw new Error(err.message);
    }
  }

  static async verify() {
    try {
      return await Api.get(endPoints.auth.LOGOUT_URL);
    } catch (err: any) {
      debugLog(err.message);
      throw new Error(err.message);
    }
  }

  static async refresh() {
    try {
      return await Api.get(endPoints.auth.REFRESH_URL);
    } catch (err: any) {
      debugLog(err.message);
      throw new Error(err.message);
    }
  }
}
