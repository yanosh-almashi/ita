import React from 'react';
import { render } from '@testing-library/react';
import NavigationMenuItem from './NavigationMenuItem';
import configureStore, { MockStore } from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const config = {
  name: 'home',
  icon: 'fas fa-home',
  path: '/random',
  id: 'someId',
  nextMenu: [
    {
      name: 'rem',
      icon: 'far fa-address-book',
      path: '/rem'
    }
  ],
  active: true,
  setActive: (elem: boolean) => {}
};

const config2 = {
  name: 'home',
  icon: 'fas fa-home',
  path: '/random',
  id: 'someId',
  nextMenu: [
    {
      name: 'rem',
      icon: 'far fa-address-book',
      path: '/rem'
    }
  ],
  active: false,
  setActive: (elem: boolean) => {}
};

describe('NavigationMenuItem', () => {
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
    const { container, getByTitle, rerender } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavigationMenuItem
            name={config.name}
            icon={config.icon}
            path={config.path}
            nextMenu={config.nextMenu}
            active={config.active}
            setActive={config.setActive}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTitle(config.name)).not.toBeNull();
    expect(container.querySelector('.fa-chevron-right')).not.toBeNull();
    expect(container.getElementsByClassName(config.icon)).not.toBeNull();
    let link = container.querySelector('a');
    if (link) {
      expect(link.getAttribute('href')).toBe(config.path);
    }

    rerender(
      <BrowserRouter>
        <Provider store={store}>
          <NavigationMenuItem
              name={config.name}
              icon={config.icon}
              path={config.path}
              nextMenu={config.nextMenu}
              active={config2.active}
              setActive={config.setActive}
          />
        </Provider>
      </BrowserRouter>
    );
    expect(container.querySelector('.fa-chevron-right')).toBeNull();
  });
});
