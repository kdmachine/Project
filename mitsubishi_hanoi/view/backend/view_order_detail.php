<div class="col-md-10 col-xs-offset-1">
	<div class="col-xs-12 col-sm-9">
		<p style="font-size: 16px; font-weight: bold">THÔNG TIN ĐƠN HÀNG</p>
	</div>
	
	<div class="col-xs-12 col-sm-3">
		<div style="margin-bottom: 5px;">
		<?php 
			//kiem tra, neu don hang chua giao thi hien thi button giao hang
			$check = model::get_a_record("select customer_id,trangthai from tbl_order where order_id=$order_id");
			if($check->trangthai == 0)
			{
		?>
			<a href="admin.php?controller=order_detail&act=sent&order_id=<?php echo $order_id; ?>" class="btn btn-primary">Xác nhận</a>&nbsp;
			<?php } ?>
			<a href="admin.php?controller=order" class="btn btn-danger">Quay lại</a>&nbsp;
		</div>
		<?php 
		$customer = model::get_a_record("select * from tbl_customer where customer_id=".$check->customer_id);
	 	?>
	</div>

	<div style="margin-bottom:5px">
		<span style="font-weight: bold"> Họ tên: </span>
		<span><?php echo $customer->hovaten; ?></span>
	</div>
	<div style="margin-bottom:5px">
		<span style="font-weight: bold">Email: </span> 
		<span><?php echo $customer->email; ?></span>
	</div>
	<div style="margin-bottom:5px">
		<span style="font-weight: bold">Địa chỉ:</span> 
		<span><?php echo $customer->diachi; ?></span>
	</div>
	<div style="margin-bottom:5px">
		<span style="font-weight: bold">Điện thoại: </span> 
		<span><?php echo $customer->dienthoai; ?></span>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">Chi tiết hoá đơn</div>
		<div class="panel-body">
			<table class="table table-bordered table-hover">
				<tr style="background-color: black; color:white">
					<th style="width: 100px;">Ảnh</th>
					<th>Tên sản phẩm</th>
					<th style="width: 100px;">Giá</th>
					<th style="width: 100px;">Số lượng</th>
				</tr>
				<?php 
					foreach($arr as $rows)
					{
						//lay thong tin san pham
						$product = model::get_a_record("select * from tbl_product where pk_product_id=".$rows->fk_product_id);
				 ?>				 
				<tr>
					<td style="text-align: center;"><img src="public/upload/product/<?php echo $product->c_img; ?>" style="width:100px;"></td>
					<td><?php echo $product->c_name; ?></td>
					<td style="text-align: center;"><?php echo number_format($product->c_price); ?>VND</td>
					<td style="text-align: center;"><?php echo $rows->c_number; ?></td>
				</tr>
				<?php } ?>
			</table>
			<style type="text/css">
				.pagination{padding: 0px; margin:0px;}
			</style>
			<ul class="pagination pull-right">
				<li><a href="#">Trang</a></li>
				<?php 
					for($i = 1; $i<=$num_page; $i++)
					{
				 ?>
				<li <?php echo isset($_GET["p"])&&$_GET["p"]==$i ? "class='active'":""; ?> ><a href="admin.php?controller=user&p=<?php echo $i; ?>"><?php echo $i; ?></a></li>
				<?php } ?>
			</ul>
		</div>
	</div>
</div>