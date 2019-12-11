import React from 'react';
import './TileItem.css';

interface Props {
  tile: any;
}

const TileItem: React.FC<Props> = ({ tile }) => {
  return (
    <div className="tiles__tile">
      <h3>{ tile.name }</h3>
      <i className={ `icon ${tile.icon}` }></i>
      <p>{ tile.text }</p>
    </div>
    
  )
}

export default TileItem;