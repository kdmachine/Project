<div class="col-md-8 col-xs-offset-2">
	<div style="margin-bottom:5px;">
		<a href="admin.php?controller=user&action=add" class="btn btn-primary">Thêm</a>
	</div>
	<div class="panel panel-primary">
		<div class="panel-heading">Danh sách người dùng</div>
		<div class="panel-body">
			<table class="table table-bordered table-hover">
				<tr>
					<th>Tên</th>
					<th>Email</th>
					<th style="width:80px; text-align:center">Quản lý</th>
				</tr>
				<?php foreach($data as $rows): ?>
				<tr>
					<td><?php echo $rows->c_fullname; ?></td>
					<td><?php echo $rows->c_email; ?></td>
					<td style="text-align:center;">
						<a href="admin.php?controller=user&action=edit&id=<?php echo $rows->pk_user_id; ?>">Sửa</a>&nbsp;
						<a href="admin.php?controller=user&action=delete&id=<?php echo $rows->pk_user_id; ?>" onclick="return window.confirm('Bạn có chắc muốn xoá không?');">Xoá</a>
					</td>
				</tr>
				<?php endforeach; ?>
			</table>
			<style type="text/css">
				.pagination{padding:0px; margin:0px;}
			</style>
			<ul class="pagination">
				<li class="page"><a class="page-item" href="#">Trang</a></li>
				<?php for($i = 1; $i <= $num_page; $i++): ?>
				<li class="page"><a class="page-item" href="admin.php?controller=user&p=<?php echo $i; ?>"><?php echo $i; ?></a></li>
				<?php endfor; ?>
			</ul>
		</div>
	</div>
</div>