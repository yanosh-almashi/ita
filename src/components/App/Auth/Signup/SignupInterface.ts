export interface SignupInterface {
  email: string;
  password: string;
  name?: string;
  group?: string;
  file?: any;
}

export interface SignupFullDataInterface {
  uid?: string;
  email?: string;
  name?: string;
  group?: string;
}

export interface AuthDataInterface {
  token: string | null;
  uid: string | null;
  refreshToken: string | null;
}
