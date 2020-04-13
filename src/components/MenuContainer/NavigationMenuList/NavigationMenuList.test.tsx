import React from 'react';
import { render } from '@testing-library/react';
import NavigationMenu from './NavigationMenuList';
import { ItemsInterface } from '@components/MenuContainer/types/types';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore, {MockStore} from "redux-mock-store";


const mockStore = configureStore([]);

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
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      authReducer: {
        uid: 'token'
      }
    });
    store.dispatch = jest.fn();
  });

  it('test', () => {
    const { container } = render(
        <BrowserRouter>
          <Provider store={store}>
            <NavigationMenu menuItems={fakeItems} />
          </Provider>
        </BrowserRouter>
        );
    const navMenuItems = container.querySelector('ul');
    if (navMenuItems) {
      expect(navMenuItems.childElementCount).toEqual(2);
    }
  });
});
