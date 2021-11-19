<?php 
	class controller_product{
		public function __construct(){
			//lay bien action truyen tu url
			$action = isset($_GET["action"])?$_GET["action"]:"";
			switch($action){
				case "edit":
					//chuc nang sua ban ghi
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham de thuc hien chuc nang edit
					$this->edit_product($id);
				break;
				case "do_edit":
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham do_edit de update ban ghi
					$this->do_edit($id);
				break;
				case "add":
					//goi ham de thuc hien chuc nang edit
					$this->add_product();
					break;
				case "do_add":
					//goi ham do_add de add ban ghi
					$this->do_add();
					break;
				case "delete":
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//goi ham delete product
					$this->delete($id);
					break;
				default:
					$this->list_product();
				break;
			}
		}
		public function list_product(){
			//---
			//phan trang
			//quy dinh so ban ghi tren mot trang
			$record_per_page = 6;
			//tinh tong so ban ghi
			$total_record = model::num_rows("select pk_product_id from tbl_product");
			//tinh so trang
			$num_page = ceil($total_record/$record_per_page);
			//lay bien p truyen tu url (bien nay se chi trang hien tai)
			$p = isset($_GET["p"])&&$_GET["p"]>0 ? $_GET["p"]-1:0;
			//xac dinh lay tu ban ghi nao
			$from = $p*$record_per_page;
			//sql
			$data =model::list_all("select * from tbl_product order by pk_product_id desc limit $from,$record_per_page");
			//load view
			include "view/backend/list_product.php";
			//---
		}
		//edit product
		public function edit_product($id){
			//tao bien form_action de dieu phoi thuoc tinh action cua the form
			$form_action = "admin.php?controller=product&action=do_edit&id=$id";
			//lay mot ban ghi tuong ung voi id truyen vao
			$record = model::get_a_record("select * from tbl_product where pk_product_id=$id");
			//load view
			include "view/backend/add_edit_product.php";
		}
		//add product
		public function add_product(){
			//tao bien form_action de dieu phoi thuoc tinh action cua the form
			$form_action = "admin.php?controller=product&action=do_add";
			//load view
			include "view/backend/add_edit_product.php";
		}
		//do_edit
		public function do_edit($id){
			$c_name = $_POST["c_name"];
			$fk_category_product_id = $_POST["fk_category_product_id"];
			$c_description = $_POST["c_description"];
			$c_content = $_POST["c_content"];
			$c_hotproduct = isset($_POST["c_hotproduct"]) ? 1:0;
			$c_price = $_POST["c_price"];
			//update ban ghi
			model::execute("update tbl_product set c_name='$c_name',c_description='$c_description',c_content='$c_content',fk_category_product_id=$fk_category_product_id,c_hotproduct=$c_hotproduct, c_price=$c_price where pk_product_id=$id");
			//neu nguoi dung chon file upload
			if($_FILES["c_img"]["name"] != ""){
				//lay ten file gan vao mot bien
				$c_img = time().$_FILES["c_img"]["name"];
				//thuc hien upload file
				move_uploaded_file($_FILES["c_img"]["tmp_name"],"public/upload/product/$c_img");
				//update ban ghi
				model::execute("update tbl_product set c_img='$c_img' where pk_product_id=$id");
			}
			//quay tro lai controller product
			header("location:admin.php?controller=product");
		}
		//do_add
		public function do_add(){
			$c_name = $_POST["c_name"];
			$fk_category_product_id = $_POST["fk_category_product_id"];
			$c_description = $_POST["c_description"];
			$c_content = $_POST["c_content"];
			$c_hotproduct = isset($_POST["c_hotproduct"]) ? 1:0;
			$c_price = $_POST["c_price"];
			$c_img = "";
			if($_FILES["c_img"]["name"] != ""){
				//lay ten file gan vao mot bien
				$c_img = time().$_FILES["c_img"]["name"];
				//thuc hien upload file
				move_uploaded_file($_FILES["c_img"]["tmp_name"],"public/upload/product/$c_img");
			}
			model::execute("insert into tbl_product set c_name='$c_name',c_description='$c_description',c_content='$c_content',fk_category_product_id=$fk_category_product_id,c_hotproduct=$c_hotproduct,c_img = '$c_img', c_price=$c_price");
			//model::execute("insert into tbl_product(c_fullname,c_email,c_password) values('$c_fullname','$c_email,'$c_password')");->xem minh sai o dau
			//quay tro lai controller product
			header("location:admin.php?controller=product");
		}
		//delete product
		public function delete($id){
			model::execute("delete from tbl_product where pk_product_id=$id");
			//quay tro lai controller product
			header("location:admin.php?controller=product");
		}
	}
	new controller_product();
?>