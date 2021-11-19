<?php 
	class controller_user{
		public function __construct(){
			//lay bien action truyen tu url
			$action = isset($_GET["action"])?$_GET["action"]:"";
			switch($action){
				case "edit":
					//chuc nang sua ban ghi
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham de thuc hien chuc nang edit
					$this->edit_user($id);
				break;
				case "do_edit":
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham do_edit de update ban ghi
					$this->do_edit($id);
				break;
				case "add":
					//goi ham de thuc hien chuc nang edit
					$this->add_user();
					break;
				case "do_add":
					//goi ham do_add de add ban ghi
					$this->do_add();
					break;
				case "delete":
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham delete user
					$this->delete($id);
					break;
				default:
					$this->list_user();
				break;
			}
		}
		public function list_user(){
			//---
			//phan trang
			//quy dinh so ban ghi tren mot trang
			$record_per_page = 5;
			//tinh tong so ban ghi
			$total_record = model::num_rows("select pk_user_id from tbl_user");
			//tinh so trang
			$num_page = ceil($total_record/$record_per_page);
			//lay bien p truyen tu url (bien nay se chi trang hien tai)
			$p = isset($_GET["p"])&&$_GET["p"]>0 ? $_GET["p"]-1:0;
			//xac dinh lay tu ban ghi nao
			$from = $p*$record_per_page;
			//sql
			$data =model::list_all("select * from tbl_user order by pk_user_id desc limit $from,$record_per_page");
			//load view
			include "view/backend/list_user.php";
			//---
		}
		//edit user
		public function edit_user($id){
			//tao bien form_action de dieu phoi thuoc tinh action cua the form
			$form_action = "admin.php?controller=user&action=do_edit&id=$id";
			//lay mot ban ghi tuong ung voi id truyen vao
			$record = model::get_a_record("select * from tbl_user where pk_user_id=$id");
			//load view
			include "view/backend/add_edit_user.php";
		}
		//add user
		public function add_user(){
			//tao bien form_action de dieu phoi thuoc tinh action cua the form
			$form_action = "admin.php?controller=user&action=do_add";
			//load view
			include "view/backend/add_edit_user.php";
		}
		//do_edit
		public function do_edit($id){
			$c_fullname = $_POST["c_fullname"];
			$c_password = $_POST["c_password"];
			//update c_fullname
			model::execute("update tbl_user set c_fullname='$c_fullname' where pk_user_id=$id");
			//neu password khong rong thi update password
			if($c_password != ""){
				//ma hoa password
				$c_password = md5($c_password);
				model::execute("update tbl_user set c_password='$c_password' where pk_user_id=$id");
			}
			//quay tro lai controller user
			header("location:admin.php?controller=user");
		}
		//do_add
		public function do_add(){
			$c_fullname = $_POST["c_fullname"];
			$c_password = $_POST["c_password"];
			$c_email = $_POST["c_email"];
			//ma hoa password
			$c_password = md5($c_password);
			model::execute("insert into tbl_user set c_fullname='$c_fullname',c_password='$c_password',c_email='$c_email'");
			//model::execute("insert into tbl_user(c_fullname,c_email,c_password) values('$c_fullname','$c_email,'$c_password')");->xem minh sai o dau
			//quay tro lai controller user
			header("location:admin.php?controller=user");
		}
		//delete user
		public function delete($id){
			model::execute("delete from tbl_user where pk_user_id=$id");
			//quay tro lai controller user
			header("location:admin.php?controller=user");
		}
	}
	new controller_user();
?>