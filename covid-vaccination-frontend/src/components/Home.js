import React from "react";
import "../assets/css/Home.css"

class Home extends React.Component {
  render() { 
    return <div className="home">
      <div className="container">
        <div className="box">
          <i class="fas fa-user-plus box-icon"></i>
          <div>
            <span className="box-title">Số lượng đăng ký tiêm</span>
            <div className="box-data">9,228,732
              <span>(lượt)</span>
            </div>
          </div>     
        </div>
        <div className="box">
          <i class="fas fa-syringe box-icon"></i>
          <div>
            <span className="box-title">Số mũi tiêm hôm qua</span>
            <div className="box-data">468,267
              <span>(mũi)</span>
            </div>
          </div>
        </div>
        <div className="box">
          <i class="fas fa-shield-virus box-icon"></i>
          <div>
            <span className="box-title">Số mũi đã tiêm toàn quốc</span>
            <div className="box-data">36,239,453
              <span>(mũi)</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Home;