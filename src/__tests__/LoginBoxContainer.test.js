import React from 'react';
import {shallow, mount} from 'enzyme';

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

function setupDom(props = {}) {
    const wrapper = mount(<LoginBoxContainer usernameLabel={'名稱'} passwordLabel={'密碼'} {...props} />);
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

test('<LoginBoxContainer /> should call validation function', () => {
    const mockFunction = jest.fn(() => true);
    const {wrapper} = setupDom({validation: mockFunction});
    wrapper.find('input').at(0).simulate('change', {target: {value: 'abc'}}); // 名稱欄位是第一個 input
    expect(mockFunction).toBeCalled();
});

test('withValidation() should be a function', () => {
    expect(typeof withValidation).toBe('function');
});

test('withValidation(validationFunction) where validationFunction is not a function ', () => {
    expect(() => {
        withValidation('string');
    }).toThrow('validationFunction should be a function');
});
