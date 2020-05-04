import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Randomizer from "./Randomizer";

afterEach(cleanup);

describe("Randomizer test", () => {
  const component = () => {
    return render(<Randomizer />);
  };
  it("Should render Randomize button", () => {
    const { getByText } = component();
    expect(getByText("Randomize")).toBeInTheDocument();
  });

  it("Should render input", () => {
    const { baseElement } = component();
    const input = baseElement.querySelector('input[type="number"]');
    expect(input).toBeInTheDocument();
  });
  it("Should render textarea", () => {
    const { baseElement } = component();
    const textarea = baseElement.querySelector("textarea");
    expect(textarea).toBeInTheDocument();
  });
  it("Should render spesific number of list items which values are the subset of data given", () => {
    const { baseElement } = component();
    const button = baseElement.querySelector("#Randomize-button");
    const input = baseElement.querySelector('input[type="number"]');
    const textarea = baseElement.querySelector("textarea");
    const items = "first\nsecond\nthird\nfourth"; //test string for textarea from which result should be generated
    const splittedItems = ["first", "second", "third", "fourth"]; //test array to compare if the expected array is a subset of the this array
    let filteredItems: string[] = []; // array for expected randomized items

    if (button === null || textarea === null || input === null) {
      return;
    }

    fireEvent.change(textarea, { target: { value: items } }); // split the start values
    fireEvent.change(input, { target: { value: 2 } }); //pick number of results
    fireEvent.click(button); //Pick random results
    const li = baseElement.querySelectorAll("li");
    li.forEach((item) => {
      filteredItems.push(item.innerHTML);
    });
    expect(splittedItems).toEqual(expect.arrayContaining(filteredItems));
    expect(li).toHaveLength(2);
  });
});
