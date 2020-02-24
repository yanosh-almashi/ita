import React from 'react';
import '../../app.css';

import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
  text: string;
  id: number;
  deleteTodo: (id: number) => void;
  changeStatus: (id: number) => void;
  status: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


const TodoListItem: React.FC<Props> = ({
  text,
  id,
  deleteTodo,
  changeStatus,
  status
}) => {
  const classes = useStyles();

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
    <li>
      <span className={classNames}>{text}</span>

      <button type='button' onClick={onDoneClick} className='doneButton'>
        {status ? 'Set Active' : 'Done'}
      </button>

      <Button
        onClick={() => deleteTodo(id)}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>


    </li>
  );
};

export default TodoListItem;
