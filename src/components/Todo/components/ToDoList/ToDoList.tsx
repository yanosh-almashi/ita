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

const TodoList: React.FC<Props> = ({
  tasks,
  deleteTodo,
  changeStatus,
  showedItems
}) => {
  const listItems = tasks.filter(el => {
    if (showedItems === 'all') {
      return true;
    } else if (showedItems === 'completed' && el.done) {
      return true;
    } else if (showedItems === 'active' && !el.done) {
      return true;
    }

    return false;
  });

  return (
    <TodoListWrapper>
      {tasks.length ? (
        <h1 className='list-heading'>{showedItems} tasks</h1>
      ) : (
        ''
      )}
      <TodosList>
        {listItems.map(item => {
          return (
            <TodoListItem
              text={item.text}
              done={item.done}
              id={item.id}
              key={item.id}
              deleteTodo={deleteTodo}
              changeStatus={changeStatus}
              data-testid='todo-item'
            />
          );
        })}
      </TodosList>
    </TodoListWrapper>
  );
};

export default TodoList;

const TodosList = styled.ul`
  margin: 0;
  padding: 0;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    padding-left: 40px;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #24c3f9;
    border-radius: 10px;
  }
`;

const TodoListWrapper = styled.div`
  .list-heading {
    text-align: center;
  }
`;
