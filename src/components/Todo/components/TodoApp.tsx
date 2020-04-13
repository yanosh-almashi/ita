import React from 'react';
import ToDoAddForm from './ToDoAddForm/ToDoAddForm';
import TodoList from './ToDoList/ToDoList';
import Filters from './Filters/Filters';
import { TodoItem } from '../types/types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  changeStatus,
  showActiveItems,
  showCompletedItems,
  showAllItems
} from '../../../store/todo/actions';
import { State } from '../types/redux/reducerTypes';

interface Props {
  tasks: TodoItem[];
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  addTodo: (text: string) => void;
  showAllItems: () => void;
  showCompletedItems: () => void;
  showActiveItems: () => void;
  showedItems: string;
}

const TodoApp: React.FC<Props> = ({
  addTodo,
  tasks,
  deleteTodo,
  changeStatus,
  showedItems,
  showAllItems,
  showCompletedItems,
  showActiveItems
}) => {
  return (
    <StyledTodo>
      <ToDoAddForm addTodo={addTodo} />
      {tasks.length ? (
        <Filters
          showAllItems={showAllItems}
          showCompletedItems={showCompletedItems}
          showActiveItems={showActiveItems}
        />
      ) : (
        ''
      )}
      <TodoList
        tasks={tasks}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
        showedItems={showedItems}
      />
    </StyledTodo>
  );
};

const mapStateToProps = (state: State) => {
  const { tasks, showedItems } = state;
  return { tasks, showedItems };
};

const mapDispatchToProps = (dispatch: any) => ({
  addTodo: (text: string) => dispatch(addTodo(text)),
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  changeStatus: (id: number) => dispatch(changeStatus(id)),
  showAllItems: () => dispatch(showAllItems()),
  showCompletedItems: () => dispatch(showCompletedItems()),
  showActiveItems: () => dispatch(showActiveItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);

const StyledTodo = styled.div`
  position: fixed;
  top: 100px;
`;
