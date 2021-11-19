<div class="col-md-8 col-xs-offset-2">	
	<div class="panel panel-primary">
		<div class="panel-heading">Thêm/Sửa người dùng</div>
		<div class="panel-body">
		<form method="post" action="<?php echo $form_action; ?>">
			<!-- rows -->
			<div class="row" style="margin-top:5px;">
				<div class="col-md-2">Họ tên</div>
				<div class="col-md-10">
					<input type="text" value="<?php echo isset ($record->c_fullname)?$record->c_fullname:""; ?>" name="c_fullname" class="form-control" required>
				</div>
			</div>
			<!-- end rows -->
			<!-- rows -->
			<div class="row" style="margin-top:5px;">
				<div class="col-md-2">Email</div>
				<div class="col-md-10">
					<input type="email" value="<?php echo isset ($record->c_email)?$record->c_email:""; ?>" name="c_email" class="form-control" <?php if(isset($record->c_email)): ?> disabled <?php else: ?> required <?php endif; ?>>
				</div>
			</div>
			<!-- end rows -->
			<!-- rows -->
			<div class="row" style="margin-top:5px;">
				<div class="col-md-2">Mật khẩu</div>
				<div class="col-md-10">
					<input type="password" name="c_password" class="form-control" <?php if(isset($record->c_email)): ?> placeholder="Không đổi mật khẩu thì không nhập" <?php else: ?> required <?php endif; ?>>
				</div>
			</div>
			<!-- end rows -->
			<!-- rows -->
			<div class="row" style="margin-top:5px;">
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