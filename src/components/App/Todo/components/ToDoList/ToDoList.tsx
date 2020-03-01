import React from 'react';
import '../../app.css';
import styled from 'styled-components';
import TodoListItem from '../ToDoListItem/ToDoListItem';
import { TodoItem } from '../../types/types';

interface Props {
  tasks: Array<TodoItem>;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  showedItems: string;
}

const TodosList = styled.ul`
  margin: 0;
  padding: 0;
`;

const TodoList: React.FC<Props> = ({
  tasks,
  deleteTodo,
  changeStatus,
  showedItems
}) => {
  const listItems = tasks.filter(el => {
    if (showedItems === 'all') {
      return true;
    } else if (showedItems === 'completed' && el.status) {
      return true;
    } else if (showedItems === 'active' && !el.status) {
      return true;
    }

    return false;
  });

  return (
    <TodosList>
      {listItems.map(item => {
        return (
          <TodoListItem
            text={item.text}
            status={item.status}
            id={item.id}
            deleteTodo={deleteTodo}
            changeStatus={changeStatus}
          />
        );
      })}
    </TodosList>
  );
};

export default TodoList;
