import React from 'react';
import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenuList';
import { ItemsInterface } from '@components/App/MenuContainer/types/types';
import { BrowserRouter } from 'react-router-dom';

const fakeItems: ItemsInterface[] = [
  {
    name: 'item1',
    icon: 'fas fa-home',
    path: '/item1'
  },
  {
    name: 'item2',
    icon: 'fas fa-home',
    path: '/item2'
  }
];

describe('NavMenuList', () => {
  it('test', () => {
    const { container } = render(
        <BrowserRouter>
          <NavigationMenu menuItems={fakeItems} />
        </BrowserRouter>
        );
    const navMenuItems = container.querySelector('ul');
    if (navMenuItems) {
      expect(navMenuItems.childElementCount).toEqual(2);
    }
  });
});
