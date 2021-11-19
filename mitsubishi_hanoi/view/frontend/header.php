<!-- header -->
<header id="header">
	<!-- top header -->
	<div class="top-header" >
		<div class="container">
			<div class="row">
				<div class="customer">
					<?php
					//kiem tra, neu user da dang nhap thi hien thi thong tin user
					if (isset($_SESSION["customer_email"])) {
					?>
						Xin chào, <?php echo $_SESSION["name"]; ?>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="index.php?controller=customer_info&id=<?php echo $_SESSION["customer_id"]; ?>">Thông tin</a>
						<a href="index.php?controller=login&act=logout">Đăng xuất</a>
					<?php } else { ?>
						<a href="index.php?controller=login"><i class="fa fa-user"></i> Đăng nhập</a> <a href="index.php?controller=register"><i class="fa fa-user-plus"></i> Đăng ký</a>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
	<!-- end top header -->
	<!-- middle header -->
	<div class="mid-header">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-3 logo "> <a href="index.php"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Mitsubishi_Electric_logo.svg/1280px-Mitsubishi_Electric_logo.svg.png" alt="Mitsubishi" title="Mitsubishi" class="img-responsive"> </a> </div>
				<div class="col-xs-12 col-sm-12 col-md-6 header-search">
					<script type="text/javascript">
						function search() {
							key = document.getElementById("key").value;
							location.href = "index.php?controller=search&key=" + key;
							return false;
						}
					</script>
					<form method="post" action="">
						<input type="text" value="" placeholder="Nhập từ khóa tìm kiếm..." id="key" class="input-control">
						<button type="submit"> <i class="fa fa-search" onclick="return search();"></i> </button>
					</form>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 mini-cart">
					<div class="wrapper-mini-cart"> 
						<span class="icon">
							<i class="fa fa-shopping-cart"> 
								<span class="mini-cart-count"> <?php echo isset($_SESSION["cart"]) ? count($_SESSION["cart"]) : ""; ?> </span>
							</i> 
						</span> <a href="cart">Giỏ hàng <i class="fa fa-caret-down"></i></a>
						<div class="content-mini-cart">
							<div class="has-items">
								<ul class="list-unstyled">
									<?php if (isset($_SESSION["cart"])) : ?>
										<?php foreach ($_SESSION["cart"] as $rows) : ?>
											<li class="clearfix" id="item-1853038">
												<div class="image"> <a href="index.php?controller=product_detail&id=<?php echo $rows["pk_product_id"]; ?>"> <img alt="<?php echo $rows["c_name"]; ?>" src="public/upload/product/<?php echo $rows["c_img"]; ?>" title="<?php echo $rows["c_name"]; ?>" class="img-responsive"> </a> </div>
												<div class="info">
													<h3><a href="index.php?controller=product_detail&id=5"><?php echo $rows["c_name"]; ?></a></h3>
													<p><?php echo number_format($rows["number"] * $rows["c_price"]); ?>₫</p>
												</div>
												<div> <a href="index.php?controller=cart&act=delete&id=<?php echo $rows["pk_product_id"]; ?>"> <i class="fa fa-times"></i></a> </div>
											</li>
										<?php endforeach; ?>
									<?php endif; ?>
								</ul>
								<a href="index.php?controller=checkout" class="button">Thanh toán</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end middle header -->
		<!-- bottom header -->
		<div class="bottom-header">
			<div class="container">
				<div class="clearfix">
					<ul class="main-nav hidden-xs hidden-sm list-unstyled">
						<li class="active" ><a href="index.php">Trang chủ</a></li>
						<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<?php
								//lay tat ca ban ghi trong tbl_category_product
								$category = model::list_all("select * from tbl_category_product order by pk_category_product_id desc");
								foreach ($category as $rows) :
								?>
									<li><a href="index.php?controller=product_category&id=<?php echo $rows->pk_category_product_id; ?>"><?php echo $rows->c_name; ?></a></li>
								<?php endforeach; ?>
							</ul>
						</li>
						<li><a href="#">Tin tức</a></li>
						<li><a href="index.php?controller=cart">Giỏ hàng</a></li>
						<li><a href="#">Liên hệ</a></li>
					</ul>
					<a href="javascript:void(0);" class="toggle-main-menu hidden-md hidden-lg"> <i class="fa fa-bars"></i> </a>
					<ul class="list-unstyled mobile-main-menu hidden-md hidden-lg" style="display:none">
						<li class="active" ><a href="index.php">Trang chủ</a></li>
						<li><a href="#">Giới thiệu</a></li>
						<li><a href="#">Tin tức</a></li>
						<li><a href="#">Liên hệ</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- end bottom header -->
</header>
<!-- end header -->