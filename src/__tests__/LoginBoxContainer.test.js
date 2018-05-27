import React from 'react';
import {shallow} from 'enzyme';

import LoginBoxContainer from '../LoginBoxContainer';
const _mount = shallow;

function setup(props = {}) {
    const wrapper = _mount(<LoginBoxContainer usernameLabel={'名稱'} passwordLabel={'密碼'} {...props} />);
    return {
        props,
        wrapper
    };
}

test('snapshot', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
});
