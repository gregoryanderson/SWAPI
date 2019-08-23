import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router';
import App from "./App";

describe("App", () => {
  it("should match the snapshot", () => {
    const wrapper = <App />;
    expect(wrapper).toMatchSnapshot();
  });
});


describe("Router", () => {
  it("should show the People page when people is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(App)).toHaveLength(1);        
  })
});
  