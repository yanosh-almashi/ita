import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 90%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
