import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TileItem from './TileItem';
import TileInterface from '../TileInterface';
import '@testing-library/jest-dom/extend-expect';

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
      <TileItem tile={{ id: '001', name: 'Random', text: 'text', icon: 'fa-cogs' }} key={ '001' } />
    );
    const tileItem = container.querySelector('.tiles__tile');
    expect(tileItem).toBeInTheDocument();

  });

  it('Should render Random in h3 tag', () => {
    const { container } = render(
      <TileItem tile={ tileItem } key={ tileItem.id } />
    );
    const titleItemTag = container.querySelector('h3');
    expect(titleItemTag).toHaveTextContent('Random');
  });
  
  it('Should render text in p tag', () => {
    const { container } = render(
      <TileItem tile={ tileItem } key={ tileItem.id } />
    );
    const titleItemTag = container.querySelector('p');
    expect(titleItemTag).toHaveTextContent('text');
  });

  it('Should render i tag', () => {
    const { container } = render(
      <TileItem tile={ tileItem } key={ tileItem.id } />
    );
    const iTag = container.querySelector('i');
    expect(iTag).toBeInTheDocument();
  });

  it('Should render class "fas fa-cogs"', () => {
    const { container } = render(
      <TileItem tile={ tileItem } key={ tileItem.id } />
    );
    const iTag = container.querySelector('i');
    const classOne = iTag?.classList[0] === 'fas';
    const classTwo = iTag?.classList[1] === 'fa-cogs';
    expect(classTwo && classOne).toBeTruthy();
  });

});