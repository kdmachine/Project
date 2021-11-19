<!doctype html>
<html lang="vi">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta http-equiv="content-language" content="vi" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<title>Mitsubishi Hà Nội</title>

	<link rel="canonical" href="index.html">
	<link rel="shortcut icon" href="public/frontend/favicon221b.png" type="image/x-icon" />
	
	<link href='public/frontend/font-awesome.min221b.css' rel='stylesheet' type='text/css' />
	<link href='public/frontend/bootstrap.min221b.css' rel='stylesheet' type='text/css' />
	<link href='public/frontend/owl.carousel221b.css' rel='stylesheet' type='text/css' />
	<link href='public/frontend/responsive221b.css' rel='stylesheet' type='text/css' />
	<link href='public/frontend/styles.scss221b.css' rel='stylesheet' type='text/css' />
	<script src='public/frontend/jquery.min221b.js' type='text/javascript'></script>
	<script src='public/frontend/bootstrap.min221b.js' type='text/javascript'></script>
	<script src='public/frontend/api.jquerya87f.js?4' type='text/javascript'></script>
	<script src='public/frontend/owl.carousel.min221b.js' type='text/javascript'></script>
	<script src='public/frontend/elevate-zoom221b.js' type='text/javascript'></script>
	<script src='public/frontend/main221b.js' type='text/javascript'></script>
	<script src='public/frontend/ajax-cart221b.js' type='text/javascript'></script>
	<link href='public/frontend/styles.scss221b.css' rel='stylesheet' type='text/css' />
</head>

<body class="index">
	<!-- co the load thang view neu khong xu ly trong controller -->
	<?php include "view/frontend/header.php"; ?>
	<div class="content">
		<div class="container">
			<div class="row">
					<!-- slide -->
					<div class="owl-slider">
						<div class="item">
							<div id="carousel-banner" class="carousel slide" data-ride="carousel">
								<!-- Indicators -->
								<ol class="carousel-indicators">
									<li data-target="#carousel-banner" data-slide-to="0" class="active"></li>
									<li data-target="#carousel-banner" data-slide-to="1"></li>
									<li data-target="#carousel-banner" data-slide-to="2"></li>
									<li data-target="#carousel-banner" data-slide-to="3"></li>
									<li data-target="#carousel-banner" data-slide-to="4"></li>
									<li data-target="#carousel-banner" data-slide-to="5"></li>
									<li data-target="#carousel-banner" data-slide-to="6"></li>
								</ol>
								<!-- Wrapper for slides -->
								<div class="carousel-inner" role="listbox" style="width: 100%">
									<div class="item active"> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img0-1537801f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img1-1537807f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img3-1537806f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img4-1537804f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img5-1537803f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img6-1537805f21393.png"> </div>
									<div class="item "> <img class="img-responsive" src="https://driver.gianhangvn.com/file/banner-giua-img7-1537802f21393.png"> </div>
								</div>
								<a class="carousel-control left" href="#carousel-banner" role="button" data-slide="prev"></a>
								<a class="carousel-control right" href="#carousel-banner" role="button" data-slide="next"></a>
								<!-- Left and right controls -->
							</div>
						</div>
					</div>
					<!-- end slide -->
			</div>
			<div class="row" style="margin-top: 10px">
				<div class="col-xs-12 col-md-12">
					<!-- main -->
					<?php include "controller/frontend/controller_hotproduct.php"; ?>
					<?php include "controller/frontend/controller_newproduct.php"; ?>
					<!-- end main -->
				</div>
			</div>
		</div>
	</div>
		
	<footer id="footer">
		<div class="top-footer">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-3">
						<h3>Về chúng tôi</h3>
						<ul class="list-unstyled">
							<li><a href="index.html">Trang chủ</a></li>
							<li><a href="gioi-thieu">Giới thiệu</a></li>
							<li><a href="tin-tuc">Tin tức</a></li>
							<li><a href="gioi-thieu">Liên hệ</a></li>
						</ul>
					</div>
					<div class="col-xs-12 col-sm-3">
						<h3>Hướng dẫn</h3>
						<ul class="list-unstyled">
							<li><a href="huo-ng-da-n-mua-ha-ng">Hướng dẫn mua hàng</a></li>
							<li><a href="huong-dan">Giao nhận và thanh toán</a></li>
							<li><a href="do-i-tra-va-ba-o-ha-nh">Đổi trả và bảo hành</a></li>
							<li><a href="account/register">Đăng ký thành viên</a></li>
						</ul>
					</div>

					<div class="col-xs-12 col-sm-3">
						<h3>Chính sách</h3>
						<ul class="list-unstyled">
							<li><a href="chinh-sach">Chính sách thanh toán</a></li>
							<li><a href="chi-nh-sa-ch-va-n-chuye-n">Chính sách vận chuyển</a></li>
							<li><a href="chi-nh-sa-ch-do-i-tra">Chính sách đổi trả</a></li>
							<li><a href="chi-nh-sa-ch-ba-o-ha-nh">Chính sách bảo hành</a></li>
						</ul>

					</div>
					<div class="col-xs-12 col-sm-3">
						<h3>Điều khoản</h3>
						<ul class="list-unstyled">
							<li><a href="dieu-khoan">Điều khoản sử dụng</a></li>
							<li><a href="die-u-khoa-n-giao-di-ch">Điều khoản giao dịch</a></li>
							<li><a href="di-ch-vu-tie-n-i-ch">Dịch vụ tiện ích</a></li>
							<li><a href="quye-n-so-hu-u-tri-tue">Quyền sở hữu trí tuệ</a></li>
						</ul>
					</div>
				</div>
				<div class="payments-method"> <img src="public/frontend/payments-method221b.png" alt="Phương thức thanh toán" title="Phương thức thanh toán"> </div>
			</div>
		</div>
		<div class="bottom-footer">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-sm-5"> © Bài tập lớn PHP - 2021</div>
					<div class="col-xs-12 col-sm-7">
						<ul class="list-unstyled">
							<li><a href="index.html">Trang chủ</a></li>
							<li><a href="gioi-thieu">Giới thiệu</a></li>
							<li><a href="tin-tuc">Tin tức</a></li>
							<li><a href="lien-he">Liên hệ</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- 
	<div class="ajax-error-modal modal">
		<div class="modal-inner">
			<div class="ajax-error-title">Lỗi</div>
			<div class="ajax-error-message"></div>
		</div>
	</div>
	<div class="ajax-success-modal modal">
		<div class="overlay"></div>
		<div class="content col-xs-12">
			<div class="ajax-left"> <img class="ajax-product-image" alt="&nbsp;" src="#" style="max-width:65px; max-height:100px" /> </div>
			<div class="ajax-right">
				<p class="ajax-product-title"></p>
				<p class="success-message btn-go-to-cart"><span style="color:#789629">&#10004;</span> Đã được thêm vào giỏ hàng.</p>
				<div class="actions">
					<button class="button" onclick="window.location='cart'">Đi tới giỏ hàng</button>
					<button class="button" onclick="window.location='checkout'">Thanh toán</button>
				</div>
			</div>
			<a href="javascript:void(0)" class="close-modal"><i class="fa fa-times"></i></a>
		</div>
	</div>
	 -->
	
</body>
</html>