import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.__handleClickButton = this.__handleClickButton.bind(this);
    }
    __handleClickButton() {
        const {onClickButton} = this.props;
        onClickButton(this.props);
    }
    render() {
        const {username, password} = this.props;
        const {usernameLabel, passwordLabel} = this.props;
        const {onChangeUsername, onChangePassword} = this.props;
        return (
            <div>
                <h2>登入</h2>
                <div>
                    {usernameLabel}: <input value={username} onChange={onChangeUsername} />
                </div>
                <div>
                    {passwordLabel}: <input value={password} onChange={onChangePassword} />
                </div>
                <button onClick={this.__handleClickButton}>送出</button>
            </div>
        );
    }
}

LoginBox.propTypes = {
    onClickButton: PropTypes.func,
    usernameLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    username: PropTypes.string,
    password: PropTypes.string.isRequired,
    onChangeUsername: PropTypes.func,
    onChangePassword: PropTypes.func,
};

LoginBox.defaultProps = {
    onClickButton: () => {},
    onChangeUsername: () => {},
    onChangePassword: () => {},
    username: '',
    password: '',
};
export default LoginBox;
