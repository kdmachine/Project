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
	<script src='public/frontend/responsive-menu221b.js' type='text/javascript'></script>
	<script src='public/frontend/elevate-zoom221b.js' type='text/javascript'></script>
	<script src='public/frontend/main221b.js' type='text/javascript'></script>
	<script src='public/frontend/ajax-cart221b.js' type='text/javascript'></script>
	<link href='public/frontend/styles.scss221b.css' rel='stylesheet' type='text/css' />
</head>

<body class="index">
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=1780127515631166";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>
	<div id="fb-root"></div>
	<?php include "view/frontend/header.php"; ?>
	<div class="content">
		<div class="container">
			<h1 style="display:none;">Mitsubishi Hà Nội</h1>

			<div class="row">
				<div class="col-xs-12 col-md-3">
					<!-- category product -->
					<aside class="aside-category">
						<h3><i class="fa fa-bars"></i>&nbsp;&nbsp; Danh mục sản phẩm</h3>
						<ul class="list-unstyled">
							<?php
							$category = model::list_all("select * from tbl_category_product where parent_id=0 order by pk_category_product_id desc");
							foreach ($category as $rows) :
							?>
								<li><a href="index.php?controller=product_category&id=<?php echo $rows->pk_category_product_id; ?>"><?php echo $rows->c_name; ?></a></li>
							<?php endforeach; ?>
						</ul>
					</aside>
					<!-- end category product -->
					<!-- end support -->
					<div class="online_support block">
						<div class="new_title">
							<h2>Hỗ trợ trực tuyến</h2>
						</div>
						<div class="block-content">
							<div class="sp_1">
								<p>Tư vấn bán hàng</p>
								<p>Mr. Thinh: +84 6969 6666</p>
							</div>
							<div class="sp_1">
								<p>Email liên hệ</p>
								<p>support@gmail.com</p>
							</div>
						</div>
					</div>
					<!-- end support online -->
					<!-- hot news -->
					<div class="home-blog">
						<h2 class="title"> <span>Tin tức</span></h2>
						<div class="row">
							<div class="owl-home-blog owl-home-blog-sidebar">
								<!-- list hot news -->
								<div class="item">
									<div class="article"> <a href="index.php?controller=news_detail&id=20" class="image">  </a>
										<div class="info">
											<h3><a href="index.php?controller=news_detail&id=20">Chọn xe nào đẹp nhất</a></h3>
											<p class="desc">
											<p>Chọn xe ở Mitsubishi Hà Nội</p>
											</p>
										</div>
									</div>
								</div>
								<!-- end list hot news -->
								<!-- list hot news -->
								<div class="item">
									<div class="article"> <a href="index.php?controller=news_detail&id=17" class="image"> </a>
										<div class="info">
											<h3><a href="index.php?controller=news_detail&id=17">Nhiều tiền làm gì?</a></h3>
											<p class="desc">
											<p>Nhiều tiền để mua xe</p>
											</p>
										</div>
									</div>
								</div>
								<!-- end list hot news -->
								<!-- list hot news -->
							</div>
						</div>
					</div>
					<!-- end hot news -->

				</div>
				<div class="col-xs-12 col-md-9">
					<!-- main -->
					<?php
					//neu ton tai duong dan khi lay bien controller tu url xuong(ghep thanh duong dan vat ly cua file controller)thi load controller do ra
					if (file_exists($controller))
						include $controller;
					?>
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
</body>
</html>