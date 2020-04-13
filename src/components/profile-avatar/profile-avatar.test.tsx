import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../store/root.reducer";
import ProfileAvatar from "./profile-avatar";

const store = createStore(rootReducer);

afterEach(cleanup);

const fakeInfo = {
  name: "Student",
  group: "WebUI",
  url: ""
};

describe("Avatar info", () => {
  const setup = () => {
    const utils = render(
      <Provider store={store}>
        <ProfileAvatar
          name={fakeInfo.name}
          group={fakeInfo.group}
          url={fakeInfo.url}
        />
      </Provider>
    );
    return utils;
  };

  it("Render Student name", () => {
    const { getByText } = setup();
    expect(getByText("Student")).toBeInTheDocument();
  });

  it("Render WebUI group", () => {
    const { getByText } = setup();
    expect(getByText("WebUI")).toBeInTheDocument();
  });

  it("Render title", () => {
    const { getByText } = setup();
    expect(getByText("Profile Avatar")).toBeInTheDocument();
  });

  it("Render edit button and after click summary button", () => {
    const { getByText } = setup();

    const buttonEdit = getByText("Edit profile");
    fireEvent.click(buttonEdit);
    expect(getByText("Profile summary")).toBeInTheDocument();

    const buttonSummary = getByText("Profile summary");
    fireEvent.click(buttonSummary);
    expect(getByText("Edit profile")).toBeInTheDocument();
  });
});
