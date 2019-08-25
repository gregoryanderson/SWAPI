import React from "react";
import { shallow } from "enzyme";
import Card from './Card'


describe("Card", () => {
    it("should match the snapshot with all the data passed through", () => {
      const fakePerson = {
        isFavorite: false,
        name: "Luke Skywalker",
        personLanguage: "Galatic Basic", 
        personPlanet: "Tatooine",
        personPlanetPopulation: "200000",
        personSpecies: "Human",
        type: "people"
      } 
      const wrapper = <Card 
      data={fakePerson}
      addFavorite={jest.fn()}
      type={"people"}
      />;
      expect(wrapper).toMatchSnapshot();
    });
})