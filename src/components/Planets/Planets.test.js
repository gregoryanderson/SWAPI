import React from 'react';
import { shallow } from 'enzyme';
import Planets from './Planets'

describe('Planets', () => {
    it('should match the snapshot', () => {
        const wrapper = <Planets />;
        expect(wrapper).toMatchSnapshot();
    })
})