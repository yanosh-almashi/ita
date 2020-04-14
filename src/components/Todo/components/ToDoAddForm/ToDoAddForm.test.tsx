import React from "react";
import ToDoAddForm from "./ToDoAddForm";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import * as actionCreators from "../../../../store/todo/actions";

describe("<ToDoAddForm>", () => {
  const mockStore = configureStore([]);
  let store: any;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      tasks: [
        {
          title: "Learn react",
          id: 1,
          done: false
        }
      ],
      showedItems: "all"
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

  it("should add properly", () => {
    fireEvent.submit(component.getByTestId("todo-form"), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions()[0].type).toBe("ADD_TODO");

    store.clearActions();

    fireEvent.submit(component.getByTestId("todo-form"), {
      bubbles: true,
      cancelable: true
    });

    expect(store.getActions().length).toBe(1);
  });
});
