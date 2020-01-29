import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Calendar from '../src/components/Calendar.jsx';

describe('<Calendar /> module', () => {
    test('should render Header correctly', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});




