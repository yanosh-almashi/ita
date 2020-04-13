import React, { useEffect, useState } from 'react';
import Tiles from '../../components/Tiles/Tiles';
import { getTilesData } from '../../api/home/home-page.api';
import { StyledTitle, StyledTitleH1 } from './home-page.styled';

const HomePage = () => {
  const [tiles, setTiles] = useState([]);

  const fetchTiles = async () => {
    const tiles: any = await getTilesData();
    setTiles(tiles);
  };

  useEffect(() => {
    fetchTiles();
  }, []);

  if (!tiles.length) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <StyledTitle>
        <StyledTitleH1>ITA Tools</StyledTitleH1>
      </StyledTitle>
      <Tiles tiles={tiles} />
    </div>
  );
};

export default HomePage;
