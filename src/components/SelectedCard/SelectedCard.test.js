import React from "react";
import { shallow } from "enzyme";
import SelectedCard from './SelectedCard';
import { exportAllDeclaration } from "@babel/types";

describe("SelectedCard", () => {
    it("should match the snapshot with all the data passed through", () => {
        const mockData = {
          name: 'Darth Vader',
          type: 'people'
        }
        const wrapper= shallow(<SelectedCard 
            data={mockData}
            />)
        expect(wrapper).toMatchSnapshot();
    })
})