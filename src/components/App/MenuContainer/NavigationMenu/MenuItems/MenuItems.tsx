import React from "react";
import styled from "styled-components";
import "./MenuItems.css";

const MenuItems: React.FC<any> = (props: any) => {
  console.dir(props);

  const Item = styled.li`
    list-style-type: none;
    ${props.isActive
      ? `color: #24c0fd; background-color: #e1f6ff;`
      : `color:  #9ba6b2; backgroundColor: #fff;`}
    font-size: 20px;
    width: 40px;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin: 10px;
    position: relative;
  `;
  const ArrowSubmenu = styled.i`
    position: absolute;
    font-size: 11px;
    right: 0;
    margin-top: 8px;
  `;
  return (
    <Item {...props.isActive}>
      <i className={props.icon} />
      {props.nextMenu && <ArrowSubmenu className="fas fa-chevron-right" />}
    </Item>
  );
};

export default MenuItems;
