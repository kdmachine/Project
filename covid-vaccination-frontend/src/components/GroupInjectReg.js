import React from 'react';

class GroupInjectReg extends React.Component {
  render() { 
    return(
      <div className="inject-reg">
          <div className="inject-reg-title">Đăng ký tiêm tổ chức</div>
          <div className="inject-reg-label">Đăng ký tiêm mũi thứ</div>
          <select className="inject-reg-box require-info">
            <option>Đăng ký tiêm mũi thứ 1</option>
            <option>Đăng ký tiêm mũi thứ 2</option>
          </select>
          <div className="enter-info">
            <div>
              <div className="inject-reg-label require-info">Họ và tên</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Ngày sinh</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Giới tính</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Số điện thoại</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Email</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Số CMND/CCCD</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Số thẻ BHYT</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Nghề nghiệp</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Đơn vị công tác</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label">Địa chỉ hiện tại</div>
              <input className="inject-reg-box inject-reg-box__long"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Tỉnh/Thành phố</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Quận/Huyện</div>
              <input className="inject-reg-box"></input>
            </div>
            
            <div>
              <div className="inject-reg-label require-info">Xã/Phường</div>
              <input className="inject-reg-box"></input>
            </div>
      
            <div>
              <div className="inject-reg-label">Dân tộc</div>
              <input className="inject-reg-box"></input>
            </div>

            <div>
              <div className="inject-reg-label require-info">Nhóm ưu tiên</div>
              <input className="inject-reg-box"></input>
            </div>

            <div>
              <div className="inject-reg-label">Ngày muốn được tiêm (dự kiến)</div>
              <input className="inject-reg-box"></input>
            </div>

            <div>
              <div className="inject-reg-label">Buổi tiêm mong muốn</div>
              <input className="inject-reg-box"></input>
            </div>
          </div>

          <div className="inject-reg-btn">Đăng ký</div>
      </div>
    )
  }
}

export default GroupInjectReg;