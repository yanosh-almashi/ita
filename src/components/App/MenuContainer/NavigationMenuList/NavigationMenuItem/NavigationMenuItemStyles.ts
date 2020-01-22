import styled from 'styled-components';
import { Props } from './NavigationMenuItem';

export const Item = styled.li`
  list-style-type: none;
  font-size: 0;
  padding: 8px;
  text-align: center;
  margin: auto;
  position: relative;
  & a {
    color: #9ba6b2;
    display: block;
    width: 40px;
    padding: 10px;
    border-radius: 8px;
    position: relative;
    margin: 0 auto;
  }
  & a:hover {
    background-color: #e1f6ff;
  }
`;

export const MenuItemIcon = styled.i`
  font-size: 20px;
`;

export const ArrowSubmenu = styled.i`
  position: absolute;
  font-size: 11px;
  right: 0;
  margin-top: 8px;
  color: ${(props: Props) => (props.active ? '#24c0fd' : '#9ba6b2')};
`;
