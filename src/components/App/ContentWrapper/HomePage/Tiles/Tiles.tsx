import React from 'react';
import TileItem from './TileItem/TileItem';
import TileInterface from './TileInterface';
import { StyledTiles, StyledLink } from './TileStyles';

interface Props {
  tiles: TileInterface[];
}

const Tiles: React.FC<Props> = ({ tiles }) => {
  return (
    <div className="tiles-container">
      <StyledTiles>
        {tiles.map((tile: any) => (
          <StyledLink to={`tools/${tile.name.toLowerCase()}`} key={tile.id}>
            <TileItem tile={tile} />
          </StyledLink>
        ))}
      </StyledTiles>
    </div>
  );
};

export default Tiles;
