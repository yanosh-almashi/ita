import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from './Signup';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import authReducer from '../../../../store/reducers/authReducer';

const store = createStore(authReducer);

afterEach(cleanup);

describe('Signup', () => {

  it('Should render SIGNUP button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    expect(getByText('SIGNUP')).toBeInTheDocument();
  });

  it('Should render 5 inputs', () => {

    const { container } = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    const inputItems = container.querySelectorAll('input');
    expect(inputItems).toHaveLength(5);
  });

  it('Should render email input', () => {

    const { container } = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    const inputItem = container.querySelector('input[type="email"]');
    expect(inputItem).toBeInTheDocument();
  });

});