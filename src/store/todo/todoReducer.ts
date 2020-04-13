import {
  ActionTypes,
  ADD_TODO,
  CHANGE_STATUS,
  DELETE_TODO,
  SHOW_ALL_ITEMS,
  SHOW_COMPLETED_ITEMS,
  SHOW_ACTIVE_ITEMS
} from '../../components/Todo/types/redux/actionsTypes';
import { State } from '../../components/Todo/types/redux/reducerTypes';
import { TodoItem } from '../../components/Todo/types/types';

export const initialState: State = {
  tasks: [],
  showedItems: 'all'
};

export const todoReducer = (
  state: State = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            text: action.text,
            done: action.done
          }
        ]
      };

    case CHANGE_STATUS:
      return {
        ...state,
        tasks: [...state.tasks].map((item: TodoItem) => {
          if (action.id === item.id) {
            item.done = !item.done;
          }
          return item;
        })
      };

    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((item: TodoItem) => {
          return item.id !== action.id;
        })
      };

    case SHOW_ALL_ITEMS:
      return {
        ...state,
        showedItems: 'all'
      };

    case SHOW_COMPLETED_ITEMS:
      return {
        ...state,
        showedItems: 'completed'
      };

    case SHOW_ACTIVE_ITEMS:
      return {
        ...state,
        showedItems: 'active'
      };
    default:
      return state;
  }
};
