export interface InitialStateInterface {
    userReducer: UserInterface
}

export interface UserInterface {
    uid: string | null,
    token: string | null,
    error: null
}