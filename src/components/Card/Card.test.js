import React from "react";
import { shallow } from "enzyme";
import Card from './Card'


describe("Card", () => {
    it("should match the snapshot with all the data passed through", () => {
      const fakePeopleData = [{
        isFavorite: false,
        name: "Luke Skywalker",
        personLanguage: "Galatic Basic", 
        personPlanet: "Tatooine",
        personPlanetPopulation: "200000",
        personSpecies: "Human",
        type: "people"
      },
      {
        isFavorite: true,
        name: "R2-D2",
        personLanguage: "n/a", 
        personPlanet: "Naboo",
        personPlanetPopulation: "4500000",
        personSpecies: "Droid",
        type: "people"
      }]
      const wrapper = shallow(<Card 
      data={fakePeopleData}
      addFavorite={jest.fn()}
      type={"people"}
      />);
      expect(wrapper).toMatchSnapshot();
    });
})