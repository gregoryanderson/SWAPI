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


    it('should update state with a favorite when addFavorite is called', () => {
      const wrapper = shallow(<App />);
      const mockPeopleData = [
      {
      isFavorite: false,
      name: "Luke Skywalker",
      personLanguage: "Galatic Basic", 
      personPlanet: "Tatooine",
      personPlanetPopulation: "200000",
      personSpecies: "Human",
      type: "people"
      },
      {
      isFavorite: false,
      name: "R2-D2",
      personLanguage: "n/a", 
      personPlanet: "Naboo",
      personPlanetPopulation: "4500000",
      personSpecies: "Droid",
      type: "people"
      }];

      wrapper.instance().setState({people: mockPeopleData});
      wrapper.instance().setState({favorites: []})
      wrapper.instance().addFavorite({name: "Luke Skywalker"}, "people")
      expect(wrapper.state('favorites')).toEqual([ 
        {
          isFavorite: true,
          name: "Luke Skywalker",
          personLanguage: "Galatic Basic", 
          personPlanet: "Tatooine",
          personPlanetPopulation: "200000",
          personSpecies: "Human",
          type: "people"
          }
      ]
    );
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
  
  it("should not show a selected card page when the planets page is selected", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/planets']}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(SelectedCard)).toHaveLength(0);        
  })

  // it("should show a vehicles's page when a vehicle card is selected", () => {
  
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/vehicles/AT-AT']}>
  //       <App/>
  //     </MemoryRouter>
  //   )
  //   expect(wrapper.find(SelectedCard)).toHaveLength(1);        
  // })
});
  