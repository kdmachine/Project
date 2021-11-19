import React, {Component } from 'react'
import {Link } from "react-router-dom"

class Register extends Component {
  render() {
    return <div className="wrapper">
      <div className="login-form">
        <header className="login-heading">Đăng ký</header>    
        <div>
          <label className="login-label" for="id">Tên đăng nhập</label>   
          <input type="text" className="login-input" id="id" placeholder="Nhập tên đăng nhập" name="username" required />
          <label className="login-label" for="email">Email</label>   
          <input type="text" className="login-input" id="email" placeholder="Nhập email" name="email" required />
          <label className="login-label" for="password">Mật khẩu</label>   
          <input type="password" className="login-input" id="password" placeholder="Nhập mật khẩu" name="password" required />  
          <button type="submit" className="login-button">Đăng ký</button>
          <div className="login-footer">Bạn đã có tài khoản?
            <Link className="login-link" to="/login">Đăng nhập</Link> 
          </div>  
        </div>   
      </div>
    </div>;
  }
}

export default Register