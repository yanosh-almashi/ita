import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

interface Props {
  addTodo: (text: string) => void;
}

const Form = styled.form``;

const defaultText = '';

const ToDoAddForm = (props: Props) => {
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
    <Form onSubmit={onSubmit} data-testid='todo-form'>
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
        data-testid='todo-input'
        required
      />
    </Form>
  );
};

export default ToDoAddForm;
