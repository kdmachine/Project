<!DOCTYPE html>
<html>
<head>
  <title>Quản lý Mitsubishi Hà Nội</title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="public/backend/css/bootstrap.min.css">
  <!-- load ckeditor -> ckeditor.com  -->
  <script type="text/javascript" src="public/backend/ckeditor/ckeditor.js"></script>
</head>
<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#" style="color:red">Quản lý Mitsubishi</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="admin.php?controller=category_product">Danh mục sản phẩm</a></li>
            <li class="active"><a href="admin.php?controller=product">Sản phẩm</a></li>
            <li class="active"><a href="admin.php?controller=order">Đơn hàng</a></li>
            <li class="active"><a href="admin.php?controller=user">Quản lý user</a></li>
            <li class="active"><a href="admin.php?controller=logout">Đăng xuất</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

   <div class="container" style="margin-top:70px;">
    <?php 
        //kiểm tra xem đường dẫn controller có tồn tại ko, nếu có tồn tại thì load file đó ra
        if(file_exists($controller))
          include $controller;
     ?>
   </div>

</body>
</html>