<?php 
	class controller_login{
		public function __construct(){
			//---
			//khi user an nut submit
			if($_SERVER["REQUEST_METHOD"]=="POST"){
				$c_email = $_POST["c_email"];
				$c_password = $_POST["c_password"];
				//ma hoa password theo md5
				$c_password = md5($c_password);
				$check = model::get_a_record("select c_email, c_password from tbl_user where c_email='$c_email'");
				if(isset($check->c_email)){
					//kiem tra password
					if($check->c_password == $c_password){
						//dang nhap thanh cong
						$_SESSION["c_email"] = $c_email;
						//quay tro lai trang admin.php
						header("location:admin.php");
					}
				}				
			}
			//---
			//load view
			include "view/backend/view_login.php";
		}
	}
	new controller_login();
?>