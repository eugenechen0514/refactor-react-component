import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginBox from './LoginBox';

function __validUsername(username) {
    return String(username).length > 3
}

class LoginBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.__handleChangeUsername = this.__handleChangeUsername.bind(this);
        this.__handleChangePassword = this.__handleChangePassword.bind(this);
        this.__handleClickButton = this.__handleClickButton.bind(this);

        this.state = {
            username: '',
            password: '',
            message: '',
        };
    }

    __handleChangeUsername(event) {
        const value = event.target.value;
        const valid = __validUsername(value);
        this.setState({
            username: value,
            message: valid ? '' : 'invalid'
        });
    }

    __handleChangePassword(event) {
        const value = event.target.value;
        this.setState({
            password: value
        });
    }

    __handleClickButton() {
        const {onClickButton} = this.props;
        onClickButton(this.state);
    }
    render() {
        return (
            <LoginBox {...this.props} {...this.state}
                      onChangePassword={this.__handleChangePassword}
                      onChangeUsername={this.__handleChangeUsername}
                      onClickButton={this.__handleClickButton} />
        );
    }
}

LoginBoxContainer.propTypes = {
    validation: PropTypes.func,
    onClickButton: PropTypes.func,
    usernameLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
};

LoginBoxContainer.defaultProps = {
    validation: __validUsername, // 不提供就用原來的驗証
    onClickButton: () => {},
};
export default LoginBoxContainer;


function withValidation(validationFunction) {
    if(typeof validationFunction !== 'function') {
        throw new Error('validationFunction should be a function.')
    }
    return function(Component){
        return class extends Component {
            constructor(props) {
                super(props);
            }
            render(){
                return <Component validation={validationFunction} {...this.props} />;
            }
        }
    } ;
}
export　{withValidation}
