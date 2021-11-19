<?php 
	class controller_checkout{
		public $model;
		public function __construct(){
			//------
			//neu user an nut "Thanh toán"
			if(isset($_SESSION["cart"]) && $_SESSION["customer_id"] != null && count($_SESSION["cart"]) > 0){	
				/*
					1. insert 1 ban ghi (customer_id,ngay,gia) vao tbl_order -> lay id vua moi insert vao -> order_id
					2. duyet qua cac phan tu cua session cart, voi moi phan tu duyet qua thi insert thanh 1 ban ghi trong tbl_order_detail
				*/
				$customer_id = 	$_SESSION["customer_id"];
				//buoc 1
				$tonggia = 0;
				foreach($_SESSION["cart"] as $product)
					$tonggia = $tonggia + $product["number"]*$product["c_price"];
				$order_id = model::execute("insert into tbl_order set customer_id=$customer_id,ngaymua=now(),gia=$tonggia");
				//buoc 2
				foreach($_SESSION["cart"] as $key=>$value){
					//insert ban ghi
					model::execute("insert into tbl_order_detail set order_id=$order_id,fk_product_id=".$value["pk_product_id"].",c_number=".$value["number"]);
				}	
				//xoa gio hang
				$_SESSION["cart"] = array();
				echo "<script>location.href='index.php?controller=cart';</script>";
			}
		}
	}
	new controller_checkout();
 ?>