import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface Props {
  addTodo: (text: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

const defaultText = '';

const ToDoAddForm = (props: Props) => {
  const classes = useStyles();

  const [text, setText] = useState(defaultText);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.addTodo(text);
    setText(defaultText);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <input
        type='text'
        placeholder='add task to do'
        onChange={onInputChange}
        value={text}
        required /> */}

      <TextField
        id='outlined-basic'
        label='Add task to do'
        variant='outlined'
        type='text'
        placeholder='add task to do'
        onChange={onInputChange}
        value={text}
        required
      />
    </form>
  );
};

export default ToDoAddForm;
