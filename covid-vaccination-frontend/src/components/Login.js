import React, {Component } from 'react'
import {Link } from "react-router-dom"
import "../assets/css/Login.css"

class Login extends Component {
  render() {
    return <div className="wrapper">
      <div className="login-form">
        <header className="login-heading">Đăng nhập</header>  
        <div>  
          <label className="login-label" for="id">Tên đăng nhập</label>   
          <input type="text" className="login-input" id="id" placeholder="Nhập tên đăng nhập" name="username" required />
          <label className="login-label" for="password">Mật khẩu</label>   
          <input type="password" className="login-input" id="password" placeholder="Nhập mật khẩu" name="password" required />
          <div className="login-remember">
            <input className="login-checkbox" type="checkbox" id="remember" />
            <label for="remember">Ghi nhớ</label>
          </div>  
          <button className="login-button" type="submit">Đăng nhập</button>
          <div className="login-footer">
            <Link className="login-link" to="/forgot-password">Quên mật khẩu</Link>       
          </div>   
          <div className="login-footer">Bạn chưa có tài khoản?
            <Link className="login-link" to="/register">Đăng ký</Link>
          </div>
        </div>   
      </div>
    </div>;
  }
}

export default Login