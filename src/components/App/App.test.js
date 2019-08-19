import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should match the snapshot", () => {
    const wrapper = <App />;
    expect(wrapper).toMatchSnapshot();
  });
});
