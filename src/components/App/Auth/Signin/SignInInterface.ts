export interface SigninInterface {
    uid: string | null,
    token: string | null,
    email: string | null,
    error: string | null,
    loading: boolean,
    login: (email: string, password : string) => void,
    signOutUser: () => void,
    verifyAuth: () => void
}