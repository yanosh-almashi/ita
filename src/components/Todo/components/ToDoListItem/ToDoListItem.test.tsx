import React from "react";
import TodoListItem from "./ToDoListItem";
//testing tools
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
//tools for redux in testings
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as actionCreators from "../../../../store/todo/actions";

describe("<TodoListItem />", () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      tasks: [
        {
          text: "Learn react",
          id: 1,
          done: false
        }
      ],
      showedItems: "all"
    });
  });

  afterEach(() => {
    store.clearActions();
  });

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <TodoListItem
          text={store.getState().tasks[0].text}
          id={store.getState().tasks[0].id}
          key={store.getState().tasks[0].id}
          done={store.getState().tasks[0].done}
          changeStatus={(id: number) =>
            store.dispatch(actionCreators.changeStatus(id))
          }
          deleteTodo={(id: number) =>
            store.dispatch(actionCreators.deleteTodo(id))
          }
        />
      </Provider>
    );
  });

  it("todo list item", () => {
    store = mockStore({
      tasks: [
        {
          title: "Do homerwork",
          id: 1,
          status: false
        }
      ],
      itemsToShow: "all"
    });

    component.rerender(
      <TodoListItem
        text={store.getState().tasks[0].text}
        id={store.getState().tasks[0].id}
        key={store.getState().tasks[0].id}
        done={store.getState().tasks[0].done}
        changeStatus={(id: number) =>
          store.dispatch(actionCreators.changeStatus(id))
        }
        deleteTodo={(id: number) =>
          store.dispatch(actionCreators.deleteTodo(id))
        }
      />
    );

    fireEvent(
      component.getByTestId("status-button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      id: store.getState().tasks[0].id,
      type: "CHANGE_STATUS"
    };
    expect(actions).toEqual([expectedPayload]);
  });

  it("To do item name check", () => {
    const taskText = component.getByTestId("task-text");
    expect(taskText).toHaveTextContent(store.getState().tasks[0].text);
  });

  it("To do item delete functionality check", () => {
    fireEvent(
      component.getByTestId("delete-button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );

    const actions = store.getActions();

    const expectedPayload = {
      id: store.getState().tasks[0].id,
      type: "DELETE_TODO"
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
