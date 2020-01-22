import React from 'react';
import TileItem from './TileItem/TileItem';
import styled from 'styled-components';
import TileInterface from './TileInterface';
import {Link} from 'react-router-dom';

const StyledTiles = styled.div`
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

interface Props {
  tiles: TileInterface[];
}

const Tiles: React.FC<Props> = ({ tiles }) => {
  return (
    <div className="tiles-container">
      <StyledTiles>
        {
            tiles.map((tile: any) => <Link to={`tools/${tile.name.toLowerCase()}`} key={tile.id}> <TileItem tile={tile} /> </Link>)
        }
      </StyledTiles>
    </div>
  );
};

export default Tiles;
