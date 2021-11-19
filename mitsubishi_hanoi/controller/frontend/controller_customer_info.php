<?php 
	class controller_customer_info{
		public function __construct(){
			$id = isset($_GET["id"])&&is_numeric($_GET["id"]) ? $_GET["id"]:0;
			//lay mot ban ghi
			$record = model::get_a_record("select * from tbl_customer where customer_id=$id");
			//load view
			include "view/frontend/view_customer_info.php";
		}
	}
	new controller_customer_info();
?>