<?php 
	class controller_product_category{
		public function __construct(){
			//---
			$id = isset($_GET["id"])&&is_numeric($_GET["id"]) ? $_GET["id"]:0;
			//phan trang
			//quy dinh so ban ghi tren mot trang
			$record_per_page = 50;
			//tinh tong so ban ghi
			$total_record = model::num_rows("select pk_product_id from tbl_product where fk_category_product_id=$id");
			//tinh so trang
			$num_page = ceil($total_record/$record_per_page);
			//lay bien p truyen tu url (bien nay se chi trang hien tai)
			$p = isset($_GET["p"])&&$_GET["p"]>0 ? $_GET["p"]-1:0;
			//xac dinh lay tu ban ghi nao
			$from = $p*$record_per_page;
			//sql
			$data =model::list_all("select * from tbl_product where fk_category_product_id=$id order by pk_product_id desc limit $from,$record_per_page");
			//load view
			include "view/frontend/view_product_category.php";
			//---
		}
	}
	new controller_product_category();
?>