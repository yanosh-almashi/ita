export interface SignupInterface {
  email: string;
  password: string;
  name?: string;
  group?: string;
}

export interface SignupFullDataInterface {
  id?: string;
  email?: string;
  name?: string;
  group?: string;
}

export interface AuthDataInterface {
  token: string | null;
  uid: string | null;
  refreshToken: string | null;
}

export interface SignupFormInterface {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  group: string;
}
