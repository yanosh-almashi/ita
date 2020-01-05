
import { CHANGE_PROJECT_TITLE } from './auth/auth.types';

export const changeProjectTitle = (title: string) => {
    return {
        type: CHANGE_PROJECT_TITLE,
        payload: title
    }
}