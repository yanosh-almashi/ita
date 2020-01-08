export interface SigninInterface {
    uid: string | null,
    token: string | null,
    error: string | null,
    signInUser: (email: string, password : string) => void,
    signOutUser: () => void,
}