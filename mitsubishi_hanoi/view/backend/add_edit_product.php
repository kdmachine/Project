<div class="col-md-8 col-xs-offset-2">
	<div class="panel panel-primary">
		<div class="panel-heading">Thêm/Sửa sản phẩm</div>
		<div class="panel-body">
			<!-- muon upload anh thi trong thr form phai co thuoc tinh:enctype="multi/form-data" -->
			<form method="post" action="<?php echo $form_action; ?>" enctype= "multipart/form-data">
			<input type="hidden" name="_token" value="{{ csrf_token() }}">
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3">Tiêu đề</div>
				<div class="col-md-9">
					<input type="text" name="c_name" class="form-control" value="<?php echo isset($record->c_name)?$record->c_name:""; ?>">
				</div>
			</div>
			<!-- end row -->
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3">Giá</div>
				<div class="col-md-9">
					<input type="number" name="c_price" class="form-control" value="<?php echo isset($record->c_price)?$record->c_price:0; ?>">
				</div>
			</div>
			<!-- end row -->
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3">Danh mục</div>
				<div class="col-md-9">
					<select name="fk_category_product_id" style="width: 516px; height: 34px">
						<?php
							$category = model::list_all("select * from tbl_category_product where parent_id=0");
							foreach($category as $rows):
						 ?>
						<option <?php if(isset($record->fk_category_product_id)&&$record->fk_category_product_id==$rows->pk_category_product_id): ?> selected <?php endif; ?> value="<?php echo $rows->pk_category_product_id; ?>"><?php echo $rows->c_name; ?></option>
						<!-- cap con  -->
						<?php 
							$category_child = model::list_all("select * from tbl_category_product where parent_id=$rows->pk_category_product_id");
							foreach($category_child as $rows_child):
						 ?>
						<option <?php if(isset($record->fk_category_product_id)&&$record->fk_category_product_id==$rows_child->pk_category_product_id): ?> selected <?php endif; ?> value="<?php echo $rows_child->pk_category_product_id; ?>">-----<?php echo $rows_child->c_name; ?></option>
						<!-- cap con  -->
						<?php endforeach; ?>
						<?php endforeach; ?>				
					</select>
				</div>
			</div>
			<!-- end row -->
			<!-- row --> 
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3">Mô tả</div>
				<div class="col-md-9">
					<textarea name="c_description" class="form-control" style="height:300px;">
					<?php echo isset($record->c_description)?$record->c_description:""; ?>
					</textarea>
					<script type="text/javascript">CKEDITOR.replace("c_description");
					</script>
				</div>
			</div>
			<!-- end row -->
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3">Chi tiết</div>
				<div class="col-md-9">
					<textarea name="c_content" class="form-control" style="height:300px;">
					<?php echo isset($record->c_content)?$record->c_content:""; ?>
					</textarea>
					<script type="text/javascript">CKEDITOR.replace("c_content");</script>
				</div>
			</div>
			<!-- end row -->
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3"></div>
				<div class="col-md-9">
					<input type="checkbox" <?php if(isset($record->c_hotproduct)&&$record->c_hotproduct==1): ?> checked <?php endif; ?> name="c_hotproduct" id="c_hotproduct"> <label for="c_hotproduct">Tin nổi bật</label>
				</div>
			</div>
			<!-- end row -->
			<!-- row -->
			<div class="row" style="margin-top: 10px">
				<div class="col-md-3">Ảnh</div>
				<div class="col-md-9">
					<input type="file" name="c_img">
				</div>
			</div>
			<!-- end row -->			
			<!-- row -->
			<div class="row" style="margin-top: 10px;">
				<div class="col-md-3"></div>
				<div class="col-md-9">
					<input type="submit" class="btn btn-primary" value="Xác nhận">
				</div>
			</div>
			<!-- end row -->
			</form>
		</div>
	</div>
</div>