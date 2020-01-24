import React from 'react';
import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenuList';
import { ItemsInterface } from '@components/App/MenuContainer/types/types';

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
    const { container } = render(<NavigationMenu menuItems={fakeItems} />);
    const navMenuItems = container.querySelector('ul');
    if (navMenuItems) {
      expect(navMenuItems.childElementCount).toEqual(2);
    }
  });
});
