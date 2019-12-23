import React, {useContext} from 'react';
import './TileItem.css';
import TileInterface from '../TileInterface';
import {AuthContext} from "@components/App/App";

interface Props {
  tile: TileInterface;
}

const TileItem: React.FC<Props> = ({ tile }) => {
    return (
      <div className="tiles__tile" data-testid="bg">
      <h3>{ tile.name }</h3>
      <i className={ `fas ${tile.icon}` }></i>
      <p>{ tile.text }</p>
    </div>
  )
}

export default TileItem;