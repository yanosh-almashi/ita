import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Signup from './Signup';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import authReducer from '../../../../store/reducers/authReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../../../../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(authReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);

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