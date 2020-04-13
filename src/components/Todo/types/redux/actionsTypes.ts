export const ADD_TODO = 'ADD_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const DELETE_TODO = 'DELETE_TODO';
export const SHOW_ALL_ITEMS = 'SHOW_ALL_ITEMS';
export const SHOW_COMPLETED_ITEMS = 'SHOW_COMPLETED_ITEMS';
export const SHOW_ACTIVE_ITEMS = 'SHOW_ACTIVE_ITEMS';

interface addTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
  done: boolean;
}

interface changeStatus {
  type: typeof CHANGE_STATUS;
  id: number;
}

interface deleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

interface showCompletedItems {
  type: typeof SHOW_COMPLETED_ITEMS;
}

interface showAllItems {
  type: typeof SHOW_ALL_ITEMS;
}

interface showActiveItems {
  type: typeof SHOW_ACTIVE_ITEMS;
}

export type ActionTypes =
  | addTodoAction
  | changeStatus
  | deleteTodoAction
  | showCompletedItems
  | showAllItems
  | showActiveItems;
