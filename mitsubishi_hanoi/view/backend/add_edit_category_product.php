<div class="col-md-8 col-xs-offset-2">	
	<div class="panel panel-primary">
		<div class="panel-heading">Thêm/Sửa danh mục</div>
		<div class="panel-body">
		<form method="post" action="<?php echo $form_action; ?>">
		<input type="hidden" name="_token" value="{{ csrf_token() }}">
			<!-- rows -->
			<div class="row" style="margin-top: 10px">
				<div class="col-md-2">Tên danh mục</div>
				<div class="col-md-10">
					<input type="text" value="<?php echo isset($record->c_name)?$record->c_name:''; ?>" name="c_name" class="form-control" required>
				</div>
			</div>
			<!-- end rows -->	
			<!-- rows -->

			<div class="row" style="margin-top: 10px">
				<div class="col-md-2"></div>
				<div class="col-md-10">
					<input type="submit" value="Xác nhận" class="btn btn-primary">
				</div>
			</div>
			<!-- end rows -->		
		</form>
		</div>
	</div>
</div>