export interface SignupInterface {
  email: string;
  password: string;
  name: string;
  group: string;
}

export interface AuthDataInterface {
  token: string | null;
  id: string | null;
  error: any;
  isAuth: boolean;
}