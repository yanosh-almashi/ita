import '@testing-library/jest-dom/extend-expect';
import { reducer } from './reducer';
import { initialState } from './reducer';
import * as actionCreators from '../redux/actions';

describe('team reducer', () => {
  let testState = initialState;
  afterEach(() => {
    testState = initialState;
  });

  it('handle ADD_TODO_ITEM', () => {
    let mockData: any = {
      id: Date.now(),
      text: 'title',
      status: false
    };
    let expectedState = {
      toDoItems: [
        {
          id: Date.now(),
          text: 'title',
          status: false
        }
      ],
      itemsToShowFlag: 'all'
    };
    expect(reducer(testState, actionCreators.addTodo(mockData))).toEqual(
      expectedState
    );
  });
  it('handle REMOVE_TODO_ITEM', () => {
    let mockData: any = {
      id: Date.now(),
      text: 'title',
      status: true
    };
    let expectedState = reducer(testState, actionCreators.addTodo(mockData));
    expect(
      reducer(expectedState, actionCreators.deleteTodo(mockData.id))
    ).toEqual(testState);
  });
  it('handle CHANGE_ITEM_STATUS', () => {
    let mockData: any = {
      id: Date.now(),
      title: 'title',
      status: false
    };
    let expectedState = reducer(testState, actionCreators.addTodo(mockData));
    expectedState = reducer(
      expectedState,
      actionCreators.changeStatus(mockData.id)
    );
    expect(expectedState.tasks[0].status).not.toBe(!mockData.status);
  });
  it('handle SHOW_ALL_ITEMS', () => {
    expect(reducer(testState, actionCreators.showAllItems()).showedItems).toBe(
      'all'
    );
  });
  it('handle SHOW_COMPLITED_ITEMS', () => {
    expect(
      reducer(testState, actionCreators.showCompletedItems()).showedItems
    ).toBe('completed');
  });
  it('handle SHOW_ACTIVE_ITEMS', () => {
    expect(
      reducer(testState, actionCreators.showActiveItems()).showedItems
    ).toBe('active');
  });
});
