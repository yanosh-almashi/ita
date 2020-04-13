import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../store/root.reducer";
import FileUpload from "./file-upload";

const store = createStore(rootReducer);

afterEach(cleanup);

describe("FileUpload", () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <FileUpload putFile={() => {}} />
      </Provider>
    );
    return utils;
  };

  it("Should render Upload button", () => {
    const { getByText } = setup();
    expect(getByText("Upload")).toBeInTheDocument();
  });

  it("Should render load input with type file", () => {
    const { container } = setup();
    const inputItems = container.querySelector("input[type='file']");
    expect(inputItems).toBeInTheDocument();
  });

  it("Should render default img", () => {
    const { container } = setup();
    const inputItems = container.querySelector("img");
    expect(inputItems).toBeInTheDocument();
  });

  it("Should invoke function", () => {
    const mockFunction = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <FileUpload putFile={mockFunction} />
      </Provider>
    );
    const uploadButton = container.querySelector("#upload");
    if (!uploadButton) {
      return;
    }
    fireEvent.change(uploadButton, { target: "" });
    expect(mockFunction).toHaveBeenCalled();
  });
});
