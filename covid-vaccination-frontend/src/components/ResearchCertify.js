import React from 'react';
import "../assets/css/InjectReg.css"

class ResearchCertify extends React.Component {
  render() { 
    return (
      <div className="research-reg"> 
      {/* Tra cứu chứng nhận tiêm */}
        <div className="research-reg-title">Tra cứu chứng nhận tiêm</div>
        <div className="enter-info">
          <div>
            <div className="inject-reg-label require-info">Họ và tên</div>
            <input type="text" className="inject-reg-box" placeholder="Họ và tên" required></input>
          </div>
          
          <div>
            <div className="inject-reg-label require-info">Ngày sinh</div>
            <input type="date" className="inject-reg-box" placeholder="Ngày sinh"></input>
          </div>
          
          <div>
            <div className="inject-reg-label require-info">Giới tính</div>
            <select className="inject-reg-box" placeholder="Giới tính">
              <option className="inject-reg-select">Nam</option>
              <option className="inject-reg-select">Nữ</option>
            </select>
          </div>
          
          <div>
            <div className="inject-reg-label require-info">Số điện thoại</div>
            <input type="number" className="inject-reg-box" placeholder="Số điện thoại"></input>
          </div>
          
          <div>
            <div className="inject-reg-label require-info">Số CMND/CCCD</div>
            <input type="number" className="inject-reg-box" placeholder="Số CMND/CCCD"></input>
          </div>
          
          <div>
            <div className="inject-reg-label">Số thẻ BHYT</div>
            <input type="number" className="inject-reg-box" placeholder="Số thẻ BHYT"></input>
          </div>
        </div>
        <div className="inject-reg-btn">Tra cứu</div>
      </div>
    );
  }
}

export default ResearchCertify;