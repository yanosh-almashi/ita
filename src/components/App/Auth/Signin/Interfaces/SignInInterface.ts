export interface SigninInterface {
  error: string | null;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
}
