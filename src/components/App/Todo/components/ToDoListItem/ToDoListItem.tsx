import React from 'react';
import '../../app.css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  status: boolean;
}

export const TodoItem = styled.li`
  background-color: #fefefe;
  border-radius: 40px;

  margin: 20px 0;
  display: flex;
  align-items: center;
  button {
    margin: 10px;
  }

  span {
    flex-grow: 3;
    flex-wrap: wrap;
    /* max-width: 100px; */
  }
`;

const ButtonsWrapper = styled.div`
  align-self: flex-end;
  position: relative;
  left: 20px;
  flex-grow: 1;
`;

const TodoListItem: React.FC<Props> = ({
  text,
  id,
  deleteTodo,
  changeStatus,
  status
}) => {
  const onDoneClick = (): void => {
    if (changeStatus) {
      changeStatus(id);
    }
  };

  let classNames = 'text';

  if (status) {
    classNames += ' completed';
  }

  return (
    <TodoItem>
      <span className={classNames}>{text}</span>
      <ButtonsWrapper>
        <Button
          type='button'
          onClick={onDoneClick}
          className='doneButton'
          variant='contained'
          color='primary'
        >
          {status ? 'Set Active' : 'Done'}
        </Button>

        <Button
          onClick={() => deleteTodo(id)}
          variant='contained'
          color='secondary'
          startIcon={<DeleteIcon />}
          id='deleteBtn'
        >
          Delete
        </Button>
      </ButtonsWrapper>
    </TodoItem>
  );
};

export default TodoListItem;
