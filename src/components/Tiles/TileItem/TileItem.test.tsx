import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TileItem from './TileItem';
import TileInterface from '../TileInterface';
import '@testing-library/jest-dom/extend-expect';
import { Link, BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

const tileItem: TileInterface = {
  id: '001',
  name: 'Random',
  text: 'text',
  icon: 'fa-cogs'
};

const setup = () => {
  const { container } = render(
    <BrowserRouter>
      <Link to={`tools/${tileItem.name.toLowerCase()}`} key={tileItem.id}>
        <TileItem tile={tileItem} />
      </Link>
    </BrowserRouter>
  );
  return container;
};

describe('Tile item', () => {
  it('Should render one tile', () => {
    const tileItem = setup().querySelector('.tiles__tile');
    expect(tileItem).toBeInTheDocument();
  });

  it('Should render Random in h3 tag', () => {
    const titleItemTag = setup().querySelector('h3');
    expect(titleItemTag).toHaveTextContent('Random');
  });

  it('Should render text in p tag', () => {
    const titleItemTag = setup().querySelector('p');
    expect(titleItemTag).toHaveTextContent('text');
  });

  it('Should render i tag', () => {
    const iTag = setup().querySelector('i');
    expect(iTag).toBeInTheDocument();
  });

  it('Should render class "fas fa-cogs"', () => {
    const iTag = setup().querySelector('i');
    const classOne = iTag?.classList[0] === 'fas';
    const classTwo = iTag?.classList[1] === 'fa-cogs';
    expect(classTwo && classOne).toBeTruthy();
  });
});
