import React from 'react';
import '../../../app.css';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface Props {
  name: string;
  clickHandler: Function;
  id?: number;
}

const Filter: React.FC<Props> = ({ name, clickHandler, id }) => {
  const filterButtonClickHandler = () => {
    if (id) {
      clickHandler(id);
    } else {
      clickHandler();
    }
  };
  return (
    <Button
      onClick={() => {
        filterButtonClickHandler();
      }}
      type='button'
      variant='contained'
      color='primary'
      id='filterButton'
      data-testid='todo-filter'
    >
      {name}
    </Button>
  );
};

export default Filter;
