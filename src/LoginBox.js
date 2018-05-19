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
        const {username, password} = this.state;
        return (
            <div>
                <h2>登入</h2>
                <div>
                    名稱: <input value={username} onChange={this.__handleChangeUsername} />
                </div>
                <div>
                    密碼: <input value={password} onChange={this.__handleChangePassword} />
                </div>
                <button onClick={this.__handleClickButton}>送出</button>
            </div>
        );
    }
}

LoginBox.propTypes = {
    onClickButton: PropTypes.func,
};

LoginBox.defaultProps = {
    onClickButton: () => {},
};
export default LoginBox;
