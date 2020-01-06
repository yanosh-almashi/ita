export interface InitialStateInterface {
    userReducer: UserInterface
}

export interface UserInterface {
    uid: null,
    token: string | null,
    email: null,
    error: null,
    isAuth: boolean,
    loading: boolean
}