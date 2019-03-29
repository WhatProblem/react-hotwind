import React from 'react'

export default class Login extends React.Component {
    login = () => {
        localStorage.setItem('LOGIN_KEY', '123456789abc')
    }
    render() {
        return (
            <div>
                <button onClick={this.login.bind(this)}>点击登录</button>
            </div>
        )
    }
}