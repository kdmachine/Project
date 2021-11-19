<div class="template-cart">
  <form action="index.php?controller=cart&act=update" method="post">
    <div class="table-responsive">
      <div class="wrapper-form">
        <form method='post' action="">
          <h1 style="font-size: 16px; font-weight: bold;">THÔNG TIN THANH TOÁN</h1>
          <div class="form-group">
            <label style="margin-right: 4px">Họ và tên:<b id="req">*</b></label>
            <input type="text" name="hovaten" class="input-control" style="width: 777px;" value="<?php echo ($_SESSION["name"]); ?>">
          </div>
          <div class="form-group">
            <label style="margin-right: 25px">Email:<b id="req">*</b></label>
            <input type="text" name="email" class="input-control" style="width: 777px;" value="<?php echo ($_SESSION["customer_email"]); ?>">
          </div>
          <div class="form-group">
            <label style="margin-right: 19px">Địa chỉ:<b id="req">*</b></label>
            <input type="text" name="diachi" class="input-control" style="width: 777px;" value="<?php echo ($_SESSION["address"]); ?>">
          </div>
          <div class="form-group">
            <label>Điện thoại:<b id="req">*</b></label>
            <input type="text" name="dienthoai" class="input-control" style="width: 777px;" value="<?php echo ($_SESSION["phone"]); ?>">
          </div>
        </form>
      </div>
      <table class="table table-cart">
        <thead>
          <tr>
            <th class="image">Ảnh</th>
            <th class="name">Tên sản phẩm</th>
            <th class="price">Giá bán</th>
            <th class="quantity">Số lượng</th>
            <th class="price">Thành tiền</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <?php
          //duyet cac phan tu trong $_SESSION["cart"]
          foreach ($_SESSION["cart"] as $rows) :
          ?>
            <tr>
              <td><img src="public/upload/product/<?php echo $rows["c_img"]; ?>" class="img-responsive" /></td>
              <td><a href="index.php?controller=product_detail&id=<?php echo $rows["pk_product_id"]; ?>"><?php echo $rows["c_name"]; ?></a></td>
              <td> <?php echo number_format($rows["c_price"]); ?> ₫ </td>
              <td><input type="number" id="qty" min="1" class="input-control" value="<?php echo $rows["number"]; ?>" name="product_<?php echo $rows["pk_product_id"]; ?>" required="Không thể để trống"></td>
              <td>
                <p><b><?php echo number_format($rows["c_price"] * $rows["number"]); ?>₫</b></p>
              </td>
              <td><a href="index.php?controller=cart&act=delete&id=<?php echo $rows["pk_product_id"] ?>" data-id="2479395"><i class="fa fa-trash"></i></a></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="6"><a href="index.php?controller=cart&act=destroy" class="button pull-left">Xóa toàn bộ</a> <a href="index.php" class="button pull-right black">Tiếp tục mua hàng</a>
              <input type="submit" class="button pull-right" value="Cập nhật">
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </form>
  <div class="total-cart"> Tổng tiền thanh toán:
    <?php echo number_format($this->cart_total()); ?>₫ <br>
    <?php if (count($_SESSION["cart"]) > 0) : ?><a href="index.php?controller=checkout" class="button black">Thanh toán</a><?php endif; ?> </div>
</div>