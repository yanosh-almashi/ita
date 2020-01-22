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

describe('Tile item', () => {
  it('Should render one tile', () => {
    const { container } = render(
      <BrowserRouter>
        <Link to={'tools/random'} key={'001'}>
          <TileItem
            tile={{ id: '001', name: 'Random', text: 'text', icon: 'fa-cogs' }}
          />
        </Link>
      </BrowserRouter>
    );
    const tileItem = container.querySelector('.tiles__tile');
    expect(tileItem).toBeInTheDocument();
  });

  it('Should render Random in h3 tag', () => {
    const { container } = render(
      <BrowserRouter>
        <Link to={`tools/${tileItem.name.toLowerCase()}`} key={tileItem.id}>
          <TileItem tile={tileItem} />
        </Link>
      </BrowserRouter>
    );
    const titleItemTag = container.querySelector('h3');
    expect(titleItemTag).toHaveTextContent('Random');
  });

  it('Should render text in p tag', () => {
    const { container } = render(
      <BrowserRouter>
        <Link to={`tools/${tileItem.name.toLowerCase()}`} key={tileItem.id}>
          <TileItem tile={tileItem} />
        </Link>
      </BrowserRouter>
    );
    const titleItemTag = container.querySelector('p');
    expect(titleItemTag).toHaveTextContent('text');
  });

  it('Should render i tag', () => {
    const { container } = render(
      <BrowserRouter>
        <Link to={`tools/${tileItem.name.toLowerCase()}`} key={tileItem.id}>
          <TileItem tile={tileItem} />
        </Link>
      </BrowserRouter>
    );
    const iTag = container.querySelector('i');
    expect(iTag).toBeInTheDocument();
  });

  it('Should render class "fas fa-cogs"', () => {
    const { container } = render(
      <BrowserRouter>
        <Link to={`tools/${tileItem.name.toLowerCase()}`} key={tileItem.id}>
          <TileItem tile={tileItem} />
        </Link>
      </BrowserRouter>
    );
    const iTag = container.querySelector('i');
    const classOne = iTag?.classList[0] === 'fas';
    const classTwo = iTag?.classList[1] === 'fa-cogs';
    expect(classTwo && classOne).toBeTruthy();
  });
});
