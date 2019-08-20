import React from 'react';
import { shallow } from 'enzyme';
import People from './People'

describe('People', () => {
    it('should look like the snapshot', () => {
        const wrapper = <People />;
        expect(wrapper).toMatchSnapshot();
    })
})