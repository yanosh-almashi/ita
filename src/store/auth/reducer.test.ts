import { userReducer as reducer } from "./reducers";
import * as types from "./actionConstants";
import { UserInterface } from "./initialStateInterface";

const initialState: UserInterface = {
  uid: null,
  token: null,
  error: null
};

describe("user auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({ ...initialState }, {})).toEqual({ ...initialState });
  });

  it("sign in successfully", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.SIGNIN_SUCCESSFUL,
          payload: { uid: "123", token: "qwerty" }
        }
      )
    ).toEqual({
      uid: "123",
      token: "qwerty",
      error: null
    });
  });
  it("sign in error", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.SIGNIN_ERROR,
          payload: "Invalid email or password"
        }
      )
    ).toEqual({
      uid: null,
      token: null,
      error: "Invalid email or password"
    });
  });

  it("sign out", () => {
    expect(
      reducer(
        { uid: "123", token: "qwerty", error: null },
        {
          type: types.SIGNOUT
        }
      )
    ).toEqual({ ...initialState });
  });
});
