import React from 'react';
import {shallow} from 'enzyme';

import LoginBoxContainer from '../LoginBoxContainer';
import {withValidation} from '../LoginBoxContainer';
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

test('<LoginBoxContainer /> should have validation property with default value', () => {
    const {wrapper} = setup();
    expect(wrapper.prop('validation')).not.toBeUndefined();
});

test('withValidation() should be a function', () => {
    expect(typeof withValidation).toBe('function');
});

test('withValidation(validationFunction) where validationFunction is not a function ', () => {
    expect(() => {
        withValidation('string');
    }).toThrow('validationFunction should be a function');
});
