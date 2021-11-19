import React from 'react';
import "../assets/css/InjectReg.css"

class ResearchReg extends React.Component {
  render() { 
    return (
      <div className="research-reg">
      {/* Tra cứu kết quả đăng ký*/}
        <div className="research-reg-title">Tra cứu kết quả đăng ký</div>
        <div className="enter-info">
          <div>
            <div className="inject-reg-label require-info">Số CMND/CCCD/Hộ chiếu</div>
            <input type="text" className="inject-reg-box inject-reg-box__normal" placeholder="Số CMND/CCCD/Hộ chiếu"></input>
          </div>

          <div>
            <div className="inject-reg-label require-info">Số điện thoại</div>
            <input type="number" className="inject-reg-box inject-reg-box__normal" placeholder="Số điện thoại"></input>
          </div>
        </div>
        <div className="inject-reg-btn">Tra cứu</div>
      </div>
    );
  }
}

export default ResearchReg;