<div class="template-customer">
    <h1 style="font-size: 16px; font-weight: bold; margin-bottom: 20px">THÔNG TIN TÀI KHOẢN</h1>
    <div class="row">
		<div class="col-xs-12 col-md-4">
            <img src="public\frontend\customer.jpg" alt="customer" style="width:250px;height:250px;">
        </div>

		<div class="col-xs-12 col-md-8">
            <div class="form-group">
                <label style="margin-right: 12px; font-size: 16px">Họ và tên:</label>
                <span style="font-size: 16px">
                    <?php  
                        $id = $_GET['id'];
                        $ten = model::get_a_record("select hovaten from tbl_customer where customer_id={$id}");
                        echo $ten->hovaten;
                    ?>
                </span>
                
            </div>
            <div class="form-group">
                <label style="margin-right: 32px; font-size: 16px">Địa chỉ:</label>
                <span style="font-size: 16px">
                    <?php  
                        $id = $_GET['id'];
                        $diachi = model::get_a_record("select diachi from tbl_customer where customer_id={$id}");
                        echo $diachi->diachi;
                    ?>
                </span>
            </div>
            <div class="form-group">
                <label style="margin-right: 45px; font-size: 16px">Email:</label>
                <span style="font-size: 16px">
                    <?php  
                        $id = $_GET['id'];
                        $email = model::get_a_record("select email from tbl_customer where customer_id={$id}");
                        echo $email->email;
                    ?>
                </span>
            </div>
            <div class="form-group">
                <label style="margin-right: 10px; font-size: 16px">Điện thoại:</label>
                <span style="font-size: 16px; font-size: 16px">
                    <?php  
                        $id = $_GET['id'];
                        $sdt = model::get_a_record("select dienthoai from tbl_customer where customer_id={$id}");
                        echo $sdt->dienthoai;
                    ?>
                </span>
            </div>
        </div>
    </div>
</div>
