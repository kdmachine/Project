<?php 
	class controller_product_detail{
		public function __construct(){
			$id = isset($_GET["id"])&&is_numeric($_GET["id"]) ? $_GET["id"]:0;
			//lay mot ban ghi
			$record = model::get_a_record("select * from tbl_product where pk_product_id=$id");
			//load view
			include "view/frontend/view_product_detail.php";
		}
	}
	new controller_product_detail();
?>