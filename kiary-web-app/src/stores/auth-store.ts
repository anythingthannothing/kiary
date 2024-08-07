import { create } from 'zustand';

interface State {
  isLoggedIn: boolean;
  nickname?: string | null;
  profileUrl?: string | null;
  accessTokenExpiresAt?: Date | null;
}

interface Action {
  login: ({ nickname, profileUrl, accessTokenExpiresAt }: any) => void;
  logout: () => void;
}

export const useAuthStore = create<State & Action>()((set) => ({
  isLoggedIn: false,
  nickname: null,
  profileUrl: null,
  accessTokenExpiresAt: null,
  login: ({ nickname, profileUrl, accessTokenExpiresAt }: any) =>
    set(() => ({
      isLoggedIn: true,
      nickname,
      profileUrl,
      accessTokenExpiresAt,
    })),
  logout: () =>
    set(() => ({
      isLoggedIn: false,
      nickname: null,
      profileUrl: null,
      accessTokenExpiresAt: null,
    })),
}));
