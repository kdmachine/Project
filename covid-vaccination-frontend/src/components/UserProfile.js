import React from 'react';
import "../assets/css/UserProfile.css"

class UserProfile extends React.Component {
  render() { 
    return <div className="user-profile">
      <h1 className="user-profile-title">Hồ sơ cá nhân</h1>
      <div className="user-profile-info">
        <div className="up-title">Thông tin cá nhân</div>
        <div className="info-box">
          <div className="up-label">Họ và tên:</div>
          <span className="up-info">Kiều Hải Dương</span>
        </div>
        <div className="info-box">
          <div className="up-label">Ngày sinh:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Giới tính:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Số điện thoại:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Email:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Số CMND/CCCD/HC:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Số thẻ BHYT:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Nghề nghiệp:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Đơn vị công tác:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Địa chỉ hiện tại:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Tỉnh/Thành phố:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Quận/Huyện:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Xã/Phường:</div>
          <span className="up-info">Demo</span>
          
        </div>
        <div className="info-box">
          <div className="up-label">Dân tộc:</div>
          <span className="up-info">Demo</span>

        </div>
        <div className="info-box">
          <div className="up-label">Quốc tịch:</div>
          <span className="up-info">Demo</span>
          
        </div>
      </div>
      <div className="user-profile-info">
        <div className="up-title">Thông tin tiêm vắc xin</div>
        <div className="table">
          <ul className="table-title">
            <li className="table-title__label table-short-box">STT</li>
            <li className="table-title__label">Thời gian tiêm</li>
            <li className="table-title__label">Tên vắc xin</li>
            <li className="table-title__label table-short-box">Mũi số</li>
            <li className="table-title__label table-long-box">Nơi tiêm</li>
            <li className="table-title__label table-long-box">Ghi chú</li>
          </ul>
          <ul className="table-title">
            <li className="table-title__label table-short-box">1</li>
            <li className="table-title__label">Demo</li>
            <li className="table-title__label">Demo</li>
            <li className="table-title__label table-short-box">Demo</li>
            <li className="table-title__label table-long-box">Demo</li>
            <li className="table-title__label table-long-box">Demo</li>
          </ul>
        </div>
      </div>
    </div>;
  }
}

export default UserProfile;