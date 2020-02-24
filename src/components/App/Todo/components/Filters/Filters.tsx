import React from 'react'
import Filter from './Filter/Filter'



interface Props {
  showAllItems: () => void;
  showCompletedItems: () => void;
  showActiveItems: () => void;
}

const Filters: React.FC<Props> = (props) => {
  return (
    <div>
      <Filter name='Show All' clickHandler={props.showAllItems} />
      <Filter name='Show Completed' clickHandler={props.showCompletedItems} />
      <Filter name='Show Active' clickHandler={props.showActiveItems} />
    </div>
  )
}



export default Filters;