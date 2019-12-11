import React from 'react';
import './Tiles.css';
import TileItem from './TileItem/TileItem';

interface Props {
  tiles: any;
}

const Tiles: React.FC<Props> = ({ tiles }) => {
  return (
    <div className="tile">
      {
        tiles.map((tile: any) => <TileItem tile={tile} key={tile.id}/>)
      }

    </div>
  )
}

export default Tiles;