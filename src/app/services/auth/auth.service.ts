export interface AuthService {
  login: (params: any) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}
