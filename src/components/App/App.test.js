import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from 'react-router';
import App from "./App";
import Card from "../Card/Card"
import SelectedCard from "../SelectedCard/SelectedCard"

describe("App", () => {
  it("should match the snapshot", () => {
    const wrapper = <App />;
    expect(wrapper).toMatchSnapshot();
  });
});


describe("Router", () => {
  it("should show the Main page when nothing is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(App)).toHaveLength(1);        
  })

  it("should show the people page when People is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/people' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Card)).toHaveLength(1);        
  })

  it("should show the vehicles page when Vehicles is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/vehicles' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Card)).toHaveLength(1);        
  })

  it("should show the planets page when Planets is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/planets' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Card)).toHaveLength(1);        
  })

  // it("should show a planet's page when a planet card is selected", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[ '/planets/C-3PO' ]}>
  //       <App/>
  //     </MemoryRouter>
  //   )
  //   expect(wrapper.find(SelectedCard)).toHaveLength(1);        
  // })
});
  