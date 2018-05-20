import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.__handleChangeUsername = this.__handleChangeUsername.bind(this);
        this.__handleChangePassword = this.__handleChangePassword.bind(this);
        this.__handleClickButton = this.__handleClickButton.bind(this);

        this.state = {
            username: '',
            password: '',
        };
    }

    __handleChangeUsername(event) {
        const value = event.target.value;
        this.setState({
            username: value
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
            <LoginBox {...this.props} {...this.state} />
        );
    }
}

LoginBox.propTypes = {
    onClickButton: PropTypes.func,
    usernameLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
};

LoginBox.defaultProps = {
    onClickButton: () => {},
};
export default LoginBox;
