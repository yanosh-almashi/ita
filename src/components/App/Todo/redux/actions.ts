import {
  ADD_TODO, CHANGE_STATUS, DELETE_TODO, SHOW_ALL_ITEMS, SHOW_COMPLETED_ITEMS, SHOW_ACTIVE_ITEMS, ActionTypes,
} from '../types/redux/actionsTypes';

export const addTodo = (text: string): ActionTypes => ({
  type: ADD_TODO,
  id: Date.now(),
  text,
});


export const changeStatus = (id: number): ActionTypes => ({
  type: CHANGE_STATUS,
  id,
});


export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  id,
});



export const showAllItems = (): ActionTypes => {
  return {
    type: SHOW_ALL_ITEMS
  };
};

export const showCompletedItems = (): ActionTypes => {
  return {
    type: SHOW_COMPLETED_ITEMS
  };
};

export const showActiveItems = (): ActionTypes => {
  return {
    type: SHOW_ACTIVE_ITEMS
  };
};