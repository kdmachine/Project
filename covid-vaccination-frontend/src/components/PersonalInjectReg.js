import React from 'react';
import "../assets/css/InjectReg.css"

class PersonalInjectReg extends React.Component {
  render() { 
    return(
      <div className="inject-reg">
          <div className="inject-reg-title">Đăng ký tiêm cá nhân</div>
          <div className="inject-reg-label require-info">Đăng ký tiêm mũi thứ</div>
          <select className="inject-reg-box">
            <option className="inject-reg-select">Đăng ký tiêm mũi thứ 1</option>
            <option className="inject-reg-select">Đăng ký tiêm mũi thứ 2</option>
          </select>
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
              <div className="inject-reg-label">Email</div>
              <input type="text" className="inject-reg-box" placeholder="Email"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Số CMND/CCCD</div>
              <input type="number" className="inject-reg-box" placeholder="Số CMND/CCCD"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Số thẻ BHYT</div>
              <input type="number" className="inject-reg-box" placeholder="Số thẻ BHYT"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Nghề nghiệp</div>
              <input type="text" className="inject-reg-box" placeholder="Nghề nghiệp"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Đơn vị công tác</div>
              <input type="text" className="inject-reg-box" placeholder="Đơn vị công tác"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Địa chỉ hiện tại</div>
              <input type="text" className="inject-reg-box inject-reg-box__long" placeholder="Địa chỉ hiện tại"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Tỉnh/Thành phố</div>
              <input type="text" className="inject-reg-box" placeholder="Tỉnh/Thành phố"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Quận/Huyện</div>
              <input type="text" className="inject-reg-box" placeholder="Quận/Huyện"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Xã/Phường</div>
              <input type="text" className="inject-reg-box inject-reg-box__normal" placeholder="Xã/Phường"></input>
            </div>
      
            <div>
              <div className="inject-reg-label">Dân tộc</div>
              <input type="text" className="inject-reg-box" placeholder="Dân tộc"></input>
            </div>

            <div>
              <div className="inject-reg-label">Quốc tịch</div>
              <input type="text" className="inject-reg-box" placeholder="Quốc tịch"></input>
            </div>

            <div>
              <div className="inject-reg-label require-info">Nhóm ưu tiên</div>
              <input type="text" className="inject-reg-box inject-reg-box__normal" placeholder="Nhóm ưu tiên"></input>
            </div>

            <div>
              <div className="inject-reg-label">Ngày muốn được tiêm (dự kiến)</div>
              <input type="date" className="inject-reg-box" placeholder="Ngày mong muốn được tiêm"></input>
            </div>

            <div>
              <div className="inject-reg-label">Buổi tiêm mong muốn</div>
              <select className="inject-reg-box">
                <option className="inject-reg-select">Buổi sáng</option>
                <option className="inject-reg-select">Buổi chiều</option>
                <option className="inject-reg-select">Cả ngày</option>
              </select>
            </div>
          </div>

          <div className="inject-reg-btn">Đăng ký</div>
      </div>
    )
  }
}

export default PersonalInjectReg;