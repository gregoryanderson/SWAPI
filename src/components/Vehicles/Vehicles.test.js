import React from 'react';
import {shallow} from 'enzyme';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
    it('should match the snapshot', () => {
    const wrapper = <Vehicles />;
    expect(wrapper).toMatchSnapshot();
    })
})