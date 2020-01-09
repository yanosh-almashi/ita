
import { CHANGE_PROJECT_TITLE } from './auth/actionConstants';

export const changeProjectTitle = (title: string) => {
    return {
        type: CHANGE_PROJECT_TITLE,
        payload: title
    }
}