import React from "react";
import { shallow } from "enzyme";
import SelectedCard from './SelectedCard';
import { exportAllDeclaration } from "@babel/types";

describe("SelectedCard", () => {
    it("should match the snapshot with all the data passed through", () => {
        const wrapper= shallow(<SelectedCard 
            id= {4}
            name={'Darth Vader'}
            type = {'people'}
            />)
        expect(wrapper).toMatchSnapshot();
    })
})