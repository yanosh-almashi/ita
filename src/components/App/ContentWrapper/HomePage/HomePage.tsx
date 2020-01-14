import React, { useEffect, useState } from 'react';
import Tiles from './Tiles/Tiles';
import styled from 'styled-components';
import { getTilesData } from '../../../../api/home/home-page.api';

const StyledTitle = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const StyledTitleH1 = styled.h1`
  color: #232e3d;
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const HomePage = () => {

  const [tiles, setTiles] = useState<any[]>([]);

  const fetchTiles = async () => {
    const tiles: any = await getTilesData();
    setTiles(tiles);
  }

  useEffect(() => {
    fetchTiles();
  }, []);

  return (
    <div>
      <StyledTitle>
        <StyledTitleH1>ITA Tools</StyledTitleH1>
      </StyledTitle>
      <Tiles tiles = { tiles } />
    </div>
  )
}

export default HomePage;