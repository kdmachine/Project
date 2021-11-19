<div class="col-md-8 col-xs-offset-2">
	<div style="margin-bottom:5px;">
		<a href="admin.php?controller=slide&action=add" class="btn btn-primary">Add Slide</a>
	</div>
	<div class="panel panel-primary">
		<div class="panel-heading">List slide</div>
		<div class="panel-body">
			<table class="table table-bordered table-hover">
				<tr>
					<th>Img</th>
					<th>Name</th>
					<th style="width:100px;"></th>
				</tr>
				<?php foreach($data as $rows): ?>
				<tr>
					<td><?php echo $rows->c_img; ?></td>
					<td><?php echo $rows->c_name; ?></td>
					<td style="text-align:center;">
						<a href="admin.php?controller=slide&action=edit&id=<?php echo $rows->pk_slide_id;?>">Edit</a>&nbsp;
						<a href="admin.php?controller=slide&action=delete&id=<?php echo $rows->pk_slide_id;?>" onclick="return window.confirm('Are you sure?');">Delete</a>
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
				<li class="page"><a class="page-item" href="admin.php?controller=slide&p=<?php echo $i; ?>"><?php echo $i; ?></a></li>
				<?php endfor; ?>
			</ul>
		</div>
	</div>
</div>