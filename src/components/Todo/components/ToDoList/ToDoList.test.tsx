import React from "react";
import TodoList from "./ToDoList";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { deleteTodo, changeStatus } from "../../../../store/todo/actions";

afterEach(cleanup);

describe("<TodoList />", () => {
  const mockStore = configureStore([]);
  let store: any;

  beforeEach(() => {
    store = mockStore({
      tasks: [
        {
          text: "Learn react",
          id: 1,
          done: false
        },
        {
          text: "Learn react",
          id: 2,
          done: false
        },
        {
          text: "Learn react",
          id: 3,
          done: true
        },
        {
          text: "Learn react",
          id: 4,
          done: true
        }
      ],
      showedItems: "all"
    });
  });

  const component = render(
    <TodoList
      showedItems={store.showedItems}
      deleteTodo={deleteTodo}
      changeStatus={changeStatus}
      tasks={store.tasks}
    />
  );

  const listItems = component.getAllByTestId("todo-item");

  it.skip("To Do List all items render check", () => {
    const { getAllByTestId } = render(
      <TodoList
        showedItems={store.showedItems}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
        tasks={store.tasks}
      />
    );
    let listItems = component.getAllByTestId("todo-item");
    expect(listItems.length).toBe(store.tasks.length);
  });
});
