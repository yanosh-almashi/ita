import { TodoItem } from '../types';

export interface State {
  tasks: TodoItem[];
  showedItems: string;
}