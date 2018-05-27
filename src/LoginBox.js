import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {username, password, message} = this.props;
        const {usernameLabel, passwordLabel} = this.props;
        const {onChangeUsername, onChangePassword, onClickButton} = this.props;
        return (
            <div>
                <h2>登入</h2>
                <div>
                    {usernameLabel}: <input value={username} onChange={onChangeUsername} />
                </div>
                <div>
                    {passwordLabel}: <input value={password} onChange={onChangePassword} />
                </div>
                <div style={{color: 'red'}}>{message}</div>
                <button onClick={onClickButton}>送出</button>
            </div>
        );
    }
}

LoginBox.propTypes = {
    onClickButton: PropTypes.func,
    usernameLabel: PropTypes.string.isRequired,
    passwordLabel: PropTypes.string.isRequired,
    message: PropTypes.string,
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
    message: '',
};
export default LoginBox;
