import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';
const _mount = shallow;

function setup(props = {}) {
    const wrapper = _mount(<App {...props} />);
    return {
        props,
        wrapper
    };
}

test('snapshot', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
});
