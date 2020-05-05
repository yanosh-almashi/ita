import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from './Signup';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../store/root.reducer';

const store = createStore(rootReducer);

afterEach(cleanup);

describe('Signup', () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    return utils;
  };

  it('Should render SIGNUP button', () => {
    const { getByText } = setup();

    expect(getByText('SIGNUP')).toBeInTheDocument();
  });

  it('Should render 5 inputs', () => {
    const { container } = setup();
    const inputItems = container.querySelectorAll('input');

    expect(inputItems).toHaveLength(6);
  });

  it('Should render email input', () => {
    const { container } = setup();
    const inputItem = container.querySelector('input[type="email"]');

    expect(inputItem).toBeInTheDocument();
  });

  it('Should validate form by email & password & confirm', () => {
    const { container, getByText } = setup();
    const inputItemEmail = container.querySelector('input[type="email"]');
    const inputItemPassword = container.querySelector('input[name="password"]');
    const inputItemConfirmPassword = container.querySelector(
      'input[name="confirmPassword"]'
    );
    const btn = container.querySelector('.MuiButtonBase-root');

    if (
      inputItemEmail === null ||
      inputItemPassword === null ||
      inputItemConfirmPassword === null ||
      btn === null
    ) {
      return;
    }

    fireEvent.change(inputItemEmail, { target: { value: 'email@ddd' } });
    fireEvent.change(inputItemPassword, { target: { value: '12345' } });
    fireEvent.change(inputItemConfirmPassword, { target: { value: '123' } });
    fireEvent.click(btn);

    const errorMessageEmail = getByText('Invalid email!');
    const errorMessagePassword = getByText('Min 6 symbols!');
    const errorMessageConfirmPassword = getByText('Passwords must match!');

    expect(
      errorMessageEmail && errorMessagePassword && errorMessageConfirmPassword
    ).toBeInTheDocument();
  });
});
