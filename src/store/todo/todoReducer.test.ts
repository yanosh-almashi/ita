import { todoReducer } from './todoReducer';
import { initialState } from './todoReducer';
import * as actionCreators from './actions';

describe('todo reducer', () => {
  let testState = initialState;

  afterEach(() => {
    testState = initialState;
  });

  beforeEach(() => {
    testState = initialState;
  });

  it('should return the initial state', () => {
    expect(todoReducer(testState, { type: 'randomPayload' })).toEqual(
      testState
    );
  });

  it('should handle ADD_TODO', () => {
    let expectedState = {
      tasks: [
        {
          id: 1,
          text: 'Learn React',
          done: false
        }
      ],
      showedItems: 'all'
    };

    expect(
      todoReducer(testState, actionCreators.addTodo('Learn React'))
    ).toEqual(expectedState);
  });

  it('should handle DELETE_TODO', () => {
    let mockData: any = {
      id: 2,
      text: 'Learn React',
      done: false
    };
    let expectedState = todoReducer(
      testState,
      actionCreators.addTodo(mockData.text)
    );
    expect(
      todoReducer(expectedState, actionCreators.deleteTodo(mockData.id))
    ).toEqual(testState);
  });

  it('should handle CHANGE_STATUS', () => {
    let mockData: any = {
      id: 3,
      text: 'Learn React',
      done: false
    };
    let expectedState = todoReducer(
      testState,
      actionCreators.addTodo(mockData.text)
    );
    expectedState = todoReducer(
      expectedState,
      actionCreators.changeStatus(mockData.id)
    );
    expect(expectedState.tasks[0].done).not.toBe(mockData.done);
  });

  it('should handle SHOW_ALL_ITEMS', () => {
    expect(
      todoReducer(testState, actionCreators.showAllItems()).showedItems
    ).toBe('all');
  });
  it('should handle SHOW_COMPLeTED_ITEMS', () => {
    expect(
      todoReducer(testState, actionCreators.showCompletedItems()).showedItems
    ).toBe('completed');
  });
  it('should handle SHOW_ACTIVE_ITEMS', () => {
    expect(
      todoReducer(testState, actionCreators.showActiveItems()).showedItems
    ).toBe('active');
  });
});
