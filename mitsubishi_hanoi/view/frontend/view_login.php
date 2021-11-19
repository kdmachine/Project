<div class="template-customer">
  <h1>Đăng nhập tài khoản</h1>
  <?php if (isset($_GET["act"]) && $_GET["act"] == "fail") { ?>
    <p style="color:red">Đăng nhập không thành công</p>
  <?php } else { ?>
    <p style="font-size: 16px">Điền chính xác các thông tin để đăng nhập</p>
  <?php } ?>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-6">
      <div class="wrapper-form">
        <form method='post' action="">
          <p class="title"><span>Đăng nhập</span></p>
          <div class="form-group">
            <label>Email:<b id="req">*</b></label>
            <input type="email" class="input-control" name="email" required="">
          </div>
          <div class="form-group">
            <label>Mật khẩu:<b id="req">*</b></label>
            <input type="password" class="input-control" name="password" required="">
          </div>
          <input type="submit" class="button" value="Đăng nhập">
        </form>
      </div>
    </div>
    <div class="col-md-6">
      <div class="wrapper-form">
        <p class="title"><span>Tạo tài khoản mới</span></p>
        <p>Chưa có tài khoản? Đăng ký ngay.</p>
        <a href="index.php?controller=register" class="button">Đăng ký</a>
      </div>
    </div>
  </div>
</div>