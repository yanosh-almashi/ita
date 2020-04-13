import React from 'react';
import Filter from './Filter';

import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as actionCreators from '../../../../../../store/todo/actions';

describe('Todo list filters test', () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  let filterName: string = 'Show all';

  beforeEach(() => {
    store = mockStore({
      tasks: [
        {
          id: 1,
          text: 'Do homerwork',
          status: true
        }
      ],
      showedItems: 'all'
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Filter
          name={filterName}
          id={store.getState().tasks[0].id}
          clickHandler={(id: number) =>
            store.dispatch(actionCreators.deleteTodo(id))
          }
        />
      </Provider>
    );
  });

  it("Check defining filter's name from props ", () => {
    expect(component.getByTestId('todo-filter').textContent).toBe(filterName);
  });
});
