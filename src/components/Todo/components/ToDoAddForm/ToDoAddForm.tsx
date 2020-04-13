import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';
interface Props {
  addTodo: (text: string) => void;
}

const defaultText = '';

const ToDoAddForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState(defaultText);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(text);
    setText(defaultText);
  };

  return (
    <Form onSubmit={onSubmit} data-testid='todo-form'>
      <TextField
        id='outlined-basic'
        label='Add task to do'
        variant='outlined'
        type='text'
        onChange={onInputChange}
        value={text}
        data-testid='todo-input'
        required
      />
    </Form>
  );
};

export default ToDoAddForm;

const Form = styled.form`
  /* display: fixed;
  top: 20px; */
`;
