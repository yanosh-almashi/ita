import React from 'react';
import ToDoAddForm from './ToDoAddForm';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actionCreators from '../../redux/actions';

describe('<ToDoAddForm>', () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      tasks: [
        {
          title: 'Learn react',
          id: 1,
          done: false
        }
      ],
      showedItems: 'all'
    });
    component = render(
      <Provider store={store}>
        <ToDoAddForm
          addTodo={item => store.dispatch(actionCreators.addTodo(item))}
        />
      </Provider>
    );
  });

  afterEach(() => {
    store.clearActions();
  });

  it('should add properly', () => {
    // fireEvent.change(component.getByTestId('todo-input'), {
    //   target: { value: 'Learn testing' }
    // });
    fireEvent.submit(component.getByTestId('todo-form'), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions()[0].type).toBe('ADD_TODO');
    // expect(store.getActions()[0].text).toBe('Learn testing');
    store.clearActions();
    // fireEvent.change(component.getByTestId('todo-input'), {
    //   target: { value: '' }
    // });
    fireEvent.submit(component.getByTestId('todo-form'), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions().length).toBe(1);
  });

  // it('No changes in component', () => {
  //   expect(component).toMatchSnapshot();
  // });
});
