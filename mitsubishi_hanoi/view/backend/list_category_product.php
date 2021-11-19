<div class="col-md-10 col-xs-offset-1">
	<div style="margin-bottom:5px;">
		<a href="admin.php?controller=category_product&action=add" class="btn btn-primary">Thêm</a>
	</div>
	<div class="panel panel-primary">
		<div class="panel-heading">Danh sách danh mục</div>
		<div class="panel-body">
			<table class="table table-bordered table-hover">
				<tr>
					<th>Tên danh mục</th>
					<th style="width:100px; text-align:center">Quản lý</th>
				</tr>
				<?php foreach($data as $rows): ?>
				<tr>
					<td><?php echo $rows->c_name; ?></td>
					<td style="text-align:center">
						<a href="admin.php?controller=category_product&action=edit&id=<?php echo $rows->pk_category_product_id; ?>">Sửa</a>&nbsp;
						<a href="admin.php?controller=category_product&action=delete&id=<?php echo $rows->pk_category_product_id; ?>" onclick="return window.confirm('Bạn có chắc muốn xoá không?');">Xoá</a>
					</td>
				</tr>
				<?php endforeach; ?>	 
			</table>
			<style type="text/css">
				.pagination{padding: 0px; margin: 0px;}
			</style>
			<ul class="pagination">
				<li class="page"><a class="page-item" href="#">Trang</a></li>
				<?php for($i = 1; $i <= $num_page; $i++): ?>
				<li class="page"><a class="page-item" href="admin.php?controller=category_product&p=<?php echo $i; ?>"><?php echo $i; ?></a></li>
				<?php endfor; ?>
			</ul>
		</div>
	</div>
</div>