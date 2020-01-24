import styled from 'styled-components';
import { Props } from './NavigationMenuList';

export const StyledNavMenu = styled.ul`
  margin: ${(props: Props) => (props.addNestedMenu ? '40px' : '93px')} 0 0 0;
  padding: 0;
`;
