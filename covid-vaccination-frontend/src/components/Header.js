import React from 'react';
import {Link } from "react-router-dom"
import "../assets/fontawesome/css/all.css"
import '../assets/css/Header.css';
import avatar from "../assets/img/avatar-default.png"

class Header extends React.Component {
  render() { 
    return <div>
      <header className="header">
        <div className="header-nav">
          <div>
            <Link to="/" className="header-label">
              <i className="fas fa-syringe header-label__icon"></i>
              Trang thông tin tiêm chủng Covid-19
            </Link>
          </div>
          <div className="header-menu">
            <div className="header-item">
              <Link to="/" className="header-item__label" >Trang chủ</Link>
            </div>
            <div className="header-item"> 
            {/* not logged in: content-hide */}
              <span className="header-item__label">
                Đăng ký tiêm
                <i className="fas fa-chevron-down header-item__icon"></i>
              </span>
              <div className="header-item-dropdown">
                <Link to="/personalinjectreg" className="header-item-dropdown__item">Đăng ký tiêm vắc xin covid-19 cho cá nhân</Link>
                <Link to="/groupinjectreg" className="header-item-dropdown__item">Đăng ký tiêm vắc xin covid-19 cho tổ chức</Link>
              </div>
            </div>
            <div className="header-item">
            {/* not logged in: content-hide */}
              <span className="header-item__label">Tra cứu
                <i className="fas fa-chevron-down header-item__icon"></i>
              </span>
              <div className="header-item-dropdown header-item-dropdown__short">
                <Link to="/researchcertify" className="header-item-dropdown__item">Tra cứu chứng nhận tiêm</Link>
                <Link to="/researchreg" className="header-item-dropdown__item">Tra cứu kết quả đăng ký</Link>
              </div>
            </div>
            <div className="header-item">
              <Link to="/login" className="header-item__label header-item__btn content-hide">Đăng nhập</Link>
            </div>
            <div className="header-item">
              <Link to="/register" className="header-item__label content-hide" >Đăng ký</Link>
            </div>
            <div className="header-item">
              <div className="user-btn">
                <img src={avatar} className="user-avatar" alt="user-avatar" />
                <span className="username">Kiều Dương</span> 
                {/* viet tam */}
                <i className="fas fa-chevron-down header-item__icon"></i>
              </div>
              <div className="header-item-dropdown header-item-dropdown__short">
                <Link to="/userprofile" className="header-item-dropdown__item">Hồ sơ</Link>
                <div className="header-item-dropdown__item">Đăng xuất</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>;
  }
}

export default Header;