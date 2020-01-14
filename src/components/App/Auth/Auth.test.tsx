import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import AuthPopUp from "./Auth";
import configureStore, { MockStore } from "redux-mock-store";
import { initialState } from "../../../store/auth/authReducer";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureStore([]);
afterEach(cleanup);
describe("AuthPopUp", () => {
  let store: MockStore;
  let component: any;
  beforeEach(() => {
    store = mockStore({
      authReducer: { ...initialState }
    });
    store.dispatch = jest.fn();
    component = render(
      <Provider store={store}>
        <AuthPopUp />
      </Provider>
    );
  });

  it("should render with Auth component", () => {
    expect(component).toMatchSnapshot();
  });

  it("should close the window by clicking on icon", () => {
    const { baseElement } = component;
    const closeIcon = baseElement.querySelector("i");
    expect(closeIcon).toBeInTheDocument();
  });

  it("should sign out by clicking on button", () => {
    const { baseElement } = component;
    const SignoutBtn = baseElement.querySelector(".signOut");
    expect(SignoutBtn).toBeInTheDocument();
    fireEvent.click(SignoutBtn);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
