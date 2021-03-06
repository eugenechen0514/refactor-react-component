import React from 'react';
import {mount} from 'enzyme';

import LoginBox from '../LoginBox';
const _mount = mount;

function setup(props = {}) {
    const wrapper = _mount(<LoginBox usernameLabel={'名稱'} passwordLabel={'密碼'} {...props} />);
    return {
        props,
        wrapper
    };
}

test('snapshot', () => {
    const {wrapper} = setup();
    expect(wrapper).toMatchSnapshot();
});
