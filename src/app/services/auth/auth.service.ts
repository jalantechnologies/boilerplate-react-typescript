export interface AuthService {
  login: () => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}
