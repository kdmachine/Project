import React from 'react';
import "../assets/css/Footer.css"

class Footer extends React.Component {
  render() { 
    return (
      <div className='footer'>
        <div>
          <div className='footer-label'>© Bản quyền thuộc về ai đó</div>
          <div className='footer-label'>Phát triển bởi ae nhóm 5</div>
        </div>
        
        <div className='footer-mobile'>
          <div className='footer-label footer-label__right'>Tải về ứng dụng trên điện thoại</div>
          <div className='mobile-app'>
            <div className="mobile-app__btn">
              <i class="fab fa-app-store-ios mobile-app__icon"></i>
              Appstore
            </div>
            <div className="mobile-app__btn ">
              <i class="fab fa-google-play mobile-app__icon"></i>
              Google Play
            </div>         
          </div> 
        </div>
      </div>
    );
  }
}

export default Footer;