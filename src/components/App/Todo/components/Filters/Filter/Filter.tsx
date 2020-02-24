import React from 'react'


interface Props {
  name: string;
  clickHandler: Function;
  id?: number;

}

const Filter: React.FC<Props> = (props) => {
  const clickHandler = () => {
    if (props.id) {
      props.clickHandler(props.id);
    } else {
      props.clickHandler();
    }
  };
  return (
    <button
      className="todo__control"
      data-testid="todo-control"
      onClick={() => {
        clickHandler();
      }}
    >
      {props.name}
    </button>
  );
}


export default Filter;
