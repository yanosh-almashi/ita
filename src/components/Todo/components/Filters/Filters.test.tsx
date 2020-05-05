import React from "react";
import Filters from "./Filters";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actionCreators from "../../../../store/todo/actions";

describe("Todo list filters test", () => {
  let component: any;
  it.skip("Check defining filters name from props", () => {
    <Filters
      showAllItems={actionCreators.showAllItems}
      showCompletedItems={actionCreators.showCompletedItems}
      showActiveItems={actionCreators.showActiveItems}
    />;
  });
});
