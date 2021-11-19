<?php 
	class controller_hotproduct{
		public function __construct(){
			//lay 6 san pham noi bat
			$hotproduct = model::list_all("select * from tbl_product where c_hotproduct=1 order by pk_product_id desc limit 0,6");
			//load view
			include "view/frontend/view_hotproduct.php";
		}
	}
	new controller_hotproduct();
 ?>