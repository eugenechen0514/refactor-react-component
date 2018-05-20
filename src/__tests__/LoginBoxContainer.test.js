import React from 'react';
import {mount} from 'enzyme';

import LoginBoxContainer from '../LoginBoxContainer';
const _mount = mount;

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
