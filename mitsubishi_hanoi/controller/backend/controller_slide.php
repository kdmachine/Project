<?php 
	class controller_slide{
		public function __construct(){
			//lấy biến action truyền từ url
			$action = isset($_GET["action"])?$_GET["action"]:"";
			switch($action){
				case 'edit':
					//chức năng sửa bản ghi
					$id=isset($_GET["id"])?$_GET["id"]:0;
					//gọi hàm để thực hiện chức năng edit
					$this->edit_slide($id);
					break;
				case 'add':
					//gọi hàm để thực hiện chức năng add
					$this->add_slide();
					break;	
				case 'do_edit':
					$id=isset($_GET["id"])?$_GET["id"]:0;
					//gọi hàm do_edit để update bản ghi
					$this->do_edit($id);
					break;
				case 'do_add':
					//gọi hàm do_add để add bản ghi
					$this->do_add();
				case 'delete':
					$id = isset($_GET["id"])?$_GET["id"]:0;
					//gọi hàm delete slide
					$this->delete($id);
					break;		
				default:
					$this->list_slide();
					break;
			}
		}
		public function list_slide(){
			//---
			//phân trang
			//quy định số bản ghi trên 1 trang
			$record_per_page = 4;
			//tính tổng số bản ghi
			$total_record = model::num_rows("select pk_slide_id from tbl_slide");
			//tính số trang
			$num_page = ceil($total_record/$record_per_page);
			//lấy biến p truyền từ url (biến này sẽ chỉ trang hiện tại)
			$p = isset($_GET["p"])&&$_GET["p"]>0 ? $_GET["p"]-1:0;
			//xác định lấy từ bản ghi nào
			$from = $p*$record_per_page;
			
			//sql
			$data = model::list_all("select * from tbl_slide order by pk_slide_id asc limit $from,$record_per_page");

			//load view
			include "view/backend/list_slide.php";
			//---
		}
		//edit slide
		public function edit_slide($id){
			//tạo biến form_action để điều phối thuộc tính action của thẻ form
			$form_action = "admin.php?controller=slide&action=do_edit&id=$id";
			//lấy 1 bản ghi tương ứng vs id truyền vào
			$record= model::get_a_record("select * from tbl_slide where pk_slide_id=$id");
			//load view
			include "view/backend/add_edit_slide.php";
		}
		//adđ slide
		public function add_slide(){
			//tạc biến form_action để điều phối thuộc tính action của thẻ form
			$form_action= "admin.php?controller=slide&action=do_add";
			//load view
			include "view/backend/add_edit_slide.php";
		}
		//do_edit
		public function do_edit($id){
			$c_name = $_POST["c_name"];
			//update c_name
			model::execute("update tbl_slide set c_name='$c_name' where pk_slide_id=$id");
			//quay trở lại controller slide
			header("location:admin.php?controller=slide");
		}
		//do_add
		public function do_add(){
			$c_name = $_POST["c_name"];
			$c_img = $_POST["c_img"];
			model::execute("insert into tbl_slide set c_name='$c_name',c_img='$c_img'");
			//qc_ay trở lại controller slidec_
			header("location:admin.php?controller=slide");
		}
		//delete slide
		public function delete($id){
			model::execute("delete from tbl_slide where pk_slide_id=$id");
			//quay trở lại controller slide
			header("location:admin.php?controller=slide");
		}
	}
	new controller_slide();
 ?>