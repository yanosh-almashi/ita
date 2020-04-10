export interface InitialStateInterface {
  authReducer: UserInterface;
}

export interface UserInterface {
  uid: string | null;
  token: string | null;
  error: null;
}
