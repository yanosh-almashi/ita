import React from 'react';
import { render } from '@testing-library/react';
import MenuContainer from './MenuContainer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Test menu container', () => {
  it('render without crashing', () => {
    const { container } = render(
        <BrowserRouter>
          <MenuContainer />
        </BrowserRouter>
        );
    expect(
      container.querySelector('[data-testid="menu-container"]')
    ).not.toBeNull();
  });
});
