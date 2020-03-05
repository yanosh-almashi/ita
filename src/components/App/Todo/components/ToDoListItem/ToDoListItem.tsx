import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  done: boolean;
  key: number;
}

const TodoListItem: React.FC<Props> = ({
  text,
  id,
  deleteTodo,
  changeStatus,
  done
}) => {
  const onDoneClick = (): void => {
    if (changeStatus) {
      changeStatus(id);
    }
  };

  let changeStatusText = 'Done';
  let classNames = 'task-text';

  if (done) {
    classNames += ' completed';
    changeStatusText = 'Set Active';
  }

  return (
    <TodoItem>
      <span data-testid='task-text' className={classNames}>
        {text}
      </span>
      <ButtonsWrapper>
        <Button
          type='button'
          onClick={onDoneClick}
          className='doneButton'
          variant='contained'
          color='primary'
          data-testid='status-button'
        >
          {changeStatusText}
        </Button>

        <Button
          onClick={() => deleteTodo(id)}
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon />}
          id='deleteBtn'
          data-testid='delete-button'
        >
          Delete
        </Button>
      </ButtonsWrapper>
    </TodoItem>
  );
};

export default TodoListItem;

export const TodoItem = styled.li`
  background-color: #fefefe;
  border-radius: 40px;
  margin: 20px 15px;
  display: flex;
  align-items: center;
  button {
    margin: 10px;
  }
  span {
    flex-grow: 3;
  }

  .task-text {
    width: 100px;
    overflow-y: auto;
    overflow-x: hidden;

    margin-left: 20px;

    ::-webkit-scrollbar {
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 3px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #24c3f9;
      border-radius: 10px;
    }
  }

  .completed {
    text-decoration: line-through;
    opacity: 0.2;
  }
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  margin-left: 60px;
  flex-grow: 1;
`;
