import React from 'react';
import '../../../app.css';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';

interface Props {
  name: string;
  clickHandler: Function;
  id?: number;
}

const Filter: React.FC<Props> = props => {
  const clickHandler = () => {
    if (props.id) {
      props.clickHandler(props.id);
    } else {
      props.clickHandler();
    }
  };
  return (
    <Button
      onClick={() => {
        clickHandler();
      }}
      type='button'
      variant='contained'
      color='primary'
      id='filterButton'
    >
      {props.name}
    </Button>
  );
};

export default Filter;
