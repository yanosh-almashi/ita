import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tiles from './Tiles';
import TileInterface from './TileInterface';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

const tiles: TileInterface[] = [
  {
    id: '001',
    name: 'Random',
    text: 'text',
    icon: 'fa-cogs'
  },
  {
    id: '002',
    name: 'Random',
    text: 'text',
    icon: 'fa-cogs'
  },
  {
    id: '003',
    name: 'Random',
    text: 'text',
    icon: 'fa-cogs'
  }
];

describe('Tiles', () => {
  it('Should render 3 tiles', () => {
    const { container } = render(
      <BrowserRouter>
        <Tiles tiles={tiles} />
      </BrowserRouter>
    );

    const tileInTilesContainer = container.querySelectorAll('.tiles__tile');
    expect(tileInTilesContainer).toHaveLength(3);
  });
});
