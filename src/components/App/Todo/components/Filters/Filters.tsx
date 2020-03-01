import React from 'react';
import Filter from './Filter/Filter';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  button {
    margin: 10px;
  }
`;

interface Props {
  showAllItems: () => void;
  showCompletedItems: () => void;
  showActiveItems: () => void;
}

const Filters: React.FC<Props> = props => {
  return (
    <FiltersWrapper>
      <Filter name='Show All' clickHandler={props.showAllItems} />
      <Filter name='Show Completed' clickHandler={props.showCompletedItems} />
      <Filter name='Show Active' clickHandler={props.showActiveItems} />
    </FiltersWrapper>
  );
};

export default Filters;
