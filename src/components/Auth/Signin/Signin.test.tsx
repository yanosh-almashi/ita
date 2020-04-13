import React from 'react';
import configureStore, { MockStore } from 'redux-mock-store';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { initialState } from '../../../store/auth/auth.reducer';
import SignIn from './Signin';
import { signInUser } from '../../../store/auth/auth.actions';

const mockStore = configureStore([]);
afterEach(cleanup);
describe('Connected React-Redux Component', () => {
  let store: MockStore;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      authReducer: { ...initialState }
    });
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );
  });

  it('should render buttons', () => {
    const { getByText } = component;
    expect(getByText('SignIn')).toBeInTheDocument();
  });

  it('should render email and password input', () => {
    const { baseElement } = component;
    const inputs = baseElement.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
  });

  it('should submit form by clicking on button', async () => {
    const { baseElement } = component;
    const submit = baseElement.querySelector('button[type="submit"]');
    const email = baseElement.querySelector('input[type="email"]');
    const password = baseElement.querySelector('input[type="password"]');

    fireEvent.change(email, { target: { value: 'softserve@gmail' } });
    fireEvent.change(password, { target: { value: '123serve' } });
    fireEvent.submit(submit);

    expect(email.value).toEqual('softserve@gmail');
    expect(password.value).toEqual('123serve');
    expect.assertions(2);
    try {
      await signInUser('softserve@gmail', '123serve');
    } catch (e) {
      expect(e).toEqual({
        error: 'User not found'
      });
    }
  });
});
