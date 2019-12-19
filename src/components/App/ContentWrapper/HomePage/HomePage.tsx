import React from 'react';
import Tiles from './Tiles/Tiles';
import styled from 'styled-components';
import TileInterface from './Tiles/TileInterface';

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

const tiles: TileInterface[] = [
  {
    id: '001',
    name: 'Random4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'fa-cogs'
  },
  {
    id: '002',
    name: 'Random1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa, eaque sequi est, sapiente eos nisi adipisci natus eum rem accusantium doloremque tempore assumenda, quam voluptate nihil iure impedit quae?',
    icon: 'fa-cogs'
  },
  {
    id: '003',
    name: 'Random4',
    text: 'text',
    icon: 'fa-cogs'
  },
  {
    id: '004',
    name: 'Random4',
    text: 'text',
    icon: 'fa-cogs'
  },
  {
    id: '005',
    name: 'Random2',
    text: 'text',
    icon: 'fa-cogs'
  },
  {
    id: '006',
    name: 'Random4',
    text: 'text',
    icon: 'fa-cogs'
  },
];

const HomePage = () => {
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