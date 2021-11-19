-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2021 at 10:39 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roisin_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category_product`
--

CREATE TABLE `tbl_category_product` (
  `pk_category_product_id` int(11) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_category_product`
--

INSERT INTO `tbl_category_product` (`pk_category_product_id`, `c_name`, `parent_id`) VALUES
(1, 'Hoa bó', 0),
(3, 'Hoa khai trương', 0),
(5, 'Hoa chia buồn', 0),
(12, 'Giỏ hoa', 0),
(13, 'Hoa tình yêu', 0),
(14, 'Hoa sinh nhật', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_customer`
--

CREATE TABLE `tbl_customer` (
  `customer_id` int(11) NOT NULL,
  `hovaten` varchar(500) NOT NULL,
  `diachi` varchar(2000) NOT NULL,
  `dienthoai` varchar(200) NOT NULL,
  `ghichu` text NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_customer`
--

INSERT INTO `tbl_customer` (`customer_id`, `hovaten`, `diachi`, `dienthoai`, `ghichu`, `email`, `password`) VALUES
(22, 'Nguyễn Văn A', '12548401', '0632516651', '', 'nva@mail.com', '202cb962ac59075b964b07152d234b70'),
(23, 'Ngô Trí Hòa', 'acbsandkb', '0123456789', '', 'nth@mail.com', '202cb962ac59075b964b07152d234b70'),
(24, 'admin', 'ngieygbckmc', '0126112362', 'ajsbd', 'admin@mail.com', '202cb962ac59075b964b07152d234b70'),
(25, 'Hoàng Trang', '22, ngõ 192, kim giang', '0964879256', '589', 'htht123@gmail.com', '202cb962ac59075b964b07152d234b70'),
(26, 'admin 123', 'asdasd', '1234645', 'asdsa', 'admin123456@yahoo.com', '202cb962ac59075b964b07152d234b70');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE `tbl_order` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `ngaymua` datetime NOT NULL DEFAULT current_timestamp(),
  `gia` float NOT NULL,
  `trangthai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`order_id`, `customer_id`, `ngaymua`, `gia`, `trangthai`) VALUES
(47, 22, '2017-05-23 00:00:00', 1353, 1),
(49, 24, '2020-01-10 00:00:00', 5953, 0),
(50, 23, '0000-00-00 00:00:00', 1902, 0),
(52, 25, '0000-00-00 00:00:00', 4808, 0),
(53, 26, '0000-00-00 00:00:00', 1353, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order_detail`
--

CREATE TABLE `tbl_order_detail` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `fk_product_id` int(11) NOT NULL,
  `c_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_order_detail`
--

INSERT INTO `tbl_order_detail` (`order_detail_id`, `order_id`, `fk_product_id`, `c_number`) VALUES
(97, 47, 22, 3),
(99, 49, 21, 2),
(100, 49, 27, 4),
(101, 49, 23, 1),
(104, 49, 22, 1),
(105, 49, 28, 2),
(109, 50, 21, 1),
(112, 50, 22, 1),
(113, 50, 23, 1),
(117, 52, 21, 4),
(118, 52, 22, 4),
(119, 53, 21, 2),
(120, 53, 22, 1),
(122, 49, 24, 1),
(125, 52, 23, 1),
(126, 52, 24, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `pk_product_id` int(11) NOT NULL,
  `fk_category_product_id` int(11) NOT NULL,
  `c_name` varchar(500) NOT NULL,
  `c_description` varchar(2000) NOT NULL,
  `c_content` text NOT NULL,
  `c_img` varchar(500) NOT NULL,
  `c_price` float NOT NULL DEFAULT 0,
  `c_hotproduct` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`pk_product_id`, `fk_category_product_id`, `c_name`, `c_description`, `c_content`, `c_img`, `c_price`, `c_hotproduct`) VALUES
(21, 5, 'Heavenly', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Heavenly.</p>\r\n', '<p><em>V&ograve;ng Hoa Heavenly&nbsp;</em>gồm:&nbsp;</p>\r\n\r\n<p><strong>- Hoa Hồng</strong></p>\r\n\r\n<p><strong>- Lan Hồ Điệp</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa &amp; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>- Băng r&ocirc;n/ banner đ&iacute;nh k&egrave;m</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621248424Heavenly.jpeg', 3159000, 1),
(22, 3, 'Blooming Success', '<p>Kệ hoa to, tươi tắn v&agrave; sang trọng với sự kết hợp của c&aacute;c loại hoa t&ocirc;ng m&agrave;u hồng.</p>\r\n\r\n<p>Đ&acirc;y sẽ l&agrave; m&oacute;n qu&agrave; tặng đầy &yacute; nghĩa thay cho lời ch&uacute;c mừng trong dịp khai trương hoặc c&aacute;c ng&agrave;y lễ trọng đại.</p>\r\n', '<p><em>Kệ Hoa Blooming Success&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>-&nbsp;Hoa Hồng</strong></p>\r\n\r\n<p><strong>- Đồng Tiền</strong></p>\r\n\r\n<p><strong>- C&aacute;t Tường</strong></p>\r\n\r\n<p><strong>- M&otilde;m S&oacute;i</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>- Băng r&ocirc;n/ banner đ&iacute;nh k&egrave;m</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621247634Blooming_Success.jpeg', 4759000, 1),
(23, 12, 'Orange Blossom', '<p>Giỏ hoa hồng m&agrave;u cam nhạt thơm ng&aacute;t, xen lẫn đ&ocirc;i ba nh&aacute;nh c&uacute;c rossi dễ thương, dễ tặng, ph&ugrave; hợp cho mọi dịp bạn cần.</p>\r\n', '<p><em>Giỏ Hoa Orange Blossom gồm:</em></p>\r\n\r\n<p><strong>- 12 B&ocirc;ng Hoa Hồng</strong></p>\r\n\r\n<p><strong>-&nbsp;C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621247036Orange_Blossom.jpeg', 499000, 1),
(24, 12, 'Intimate Amber', '<p>Những loại hoa m&agrave;u đỏ kết hợp với giỏ hoa kim loại l&agrave; m&oacute;n qu&agrave; cổ điển, sang trọng cho bất kỳ ai bạn y&ecirc;u mến.</p>\r\n', '<p><em>GIỏ&nbsp;Hoa Intimate Amber&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>- 32 B&ocirc;ng Hoa Hồng</strong></p>\r\n\r\n<p><strong>- 4 C&agrave;nh Cẩm Chướng</strong></p>\r\n\r\n<p><strong>-&nbsp;C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p>* Do được l&agrave;m thủ c&ocirc;ng v&agrave; t&ugrave;y thuộc v&agrave;o m&ugrave;a hoa/ m&agrave;u sắc hoa trong năm, n&ecirc;n sản phẩm c&oacute; thể c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621246940Intimate_Amber.jpeg', 879000, 0),
(27, 14, 'Take My Heart', '<p>B&oacute; Hoa Take My Heart sang trọng v&agrave; lộng lẫy với những b&ocirc;ng hoa Hồng đỏ rực rỡ l&agrave; lựa chọn ho&agrave;n hảo gửi đến người th&acirc;n y&ecirc;u trong ng&agrave;y sinh nhật&nbsp;hoặc bất kỳ dịp đặc biệt n&agrave;o.</p>\r\n', '<p><em>B&oacute; Hoa Take my hear&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>- 101 B&ocirc;ng Hoa Hồng</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong>&nbsp;</p>\r\n\r\n<p><strong>*&nbsp;</strong>Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621247412take_my_hear.jpeg', 1649000, 1),
(28, 13, 'Aphrodite', '<p>B&oacute; hoa mang gam m&agrave;u pastel nhẹ nh&agrave;ng đầy trang nh&atilde; điểm xuyến v&agrave;i b&ocirc;ng hồng đỏ thu h&uacute;t mọi &aacute;nh nh&igrave;n. Đ&acirc;y sẽ l&agrave; m&oacute;n qu&agrave; bất ngờ v&agrave; ho&agrave;n hảo d&agrave;nh tặng người thương, gia đ&igrave;nh hoặc bạn b&egrave;.</p>\r\n', '<ul>\r\n	<li><em>B&oacute; Hoa Hồng Aphrodite&nbsp;</em>bao gồm:</li>\r\n</ul>\r\n\r\n<p><strong>- 20&nbsp;b&ocirc;ng Hoa Hồng</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại Hoa v&agrave; L&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>*</strong>Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621246644aphrodite.jpeg', 459000, 0),
(29, 12, 'Dreamlike', '<p>Giỏ hoa rực rỡ v&agrave; đầy sức sống với hoa Hồng, Đồng Tiền &amp; Cẩm Chướng tươi tắn. Đ&acirc;y sẽ l&agrave; m&oacute;n qu&agrave; bất ngờ v&agrave; ho&agrave;n hảo d&agrave;nh tặng người thương, gia đ&igrave;nh hoặc bạn b&egrave;.</p>\r\n', '<p><em>Giỏ Hoa Dreamlike gồm:</em></p>\r\n\r\n<p><strong>- 15 B&ocirc;ng Hồng&nbsp;</strong></p>\r\n\r\n<p><strong>- 10 B&ocirc;ng C&aacute;t Tường</strong></p>\r\n\r\n<p><strong>- 8 B&ocirc;ng Đồng Tiền</strong></p>\r\n\r\n<p><strong>- Hoa Baby</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>*</strong>Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621246795dreamlike.jpeg', 889000, 0),
(30, 13, 'For The Beautiful', '<p>Những đ&oacute;a hoa hồng phấn được g&oacute;i đặc biệt bằng giấy kraft với d&ograve;ng chữ &quot;Gorgeous You - For The Beautiful&quot; thể hiện th&ocirc;ng điệp một c&aacute;ch tinh tế cho người thương y&ecirc;u của bạn, ph&ugrave; hợp để bạn gửi tặng v&agrave;o những dịp đặc biệt.</p>\r\n', '<p><em>B&oacute; Hoa For The Beautiful&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>- 10 B&ocirc;ng Hoa Hồng</strong></p>\r\n\r\n<p><strong>- L&aacute; Bạc</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</strong>&nbsp;</p>\r\n\r\n<p><strong>*</strong>Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621246096for_the_beauty.jpeg', 519000, 0),
(31, 5, 'Gentle Sentiment', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Gentle Sentiment</p>\r\n', '<p><em>V&ograve;ng Hoa Chia Buồn&nbsp;Gentle Sentiment&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>- Hoa Ly Trắng</strong></p>\r\n\r\n<p><strong>- Hoa Hồng Trắng</strong></p>\r\n\r\n<p><strong>- L&aacute; Đinh Lăng</strong></p>\r\n\r\n<p><strong>- L&aacute; Bạc</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>-&nbsp;Kệ Hoa</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n\r\n<p>* Một số sản phẩm hoa c&oacute; thể thay đổi về m&agrave;u sắc do t&ugrave;y thuộc v&agrave;o m&ugrave;a hoa trong năm.</p>\r\n', '1621248540Gentle_Sentiment.jpeg', 1049000, 1),
(32, 5, 'Relief', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Relief</p>\r\n', '<p><em>V&ograve;ng Hoa Chia Buồn&nbsp;Relief&nbsp;</em>gồm:</p>\r\n\r\n<p><strong>- Hoa Ly V&agrave;ng</strong></p>\r\n\r\n<p><strong>-&nbsp;Hoa C&uacute;c&nbsp;V&agrave;ng</strong></p>\r\n\r\n<p><strong>- Hoa Hồng V&agrave;ng</strong></p>\r\n\r\n<p><strong>- Hoa&nbsp;Cẩm Trắng</strong></p>\r\n\r\n<p><strong>-&nbsp;Tr&uacute;c Nhật</strong></p>\r\n\r\n<p><strong>- Đinh Lăng</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>-&nbsp;Kệ Hoa</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n\r\n<p>* Một số sản phẩm hoa c&oacute; thể thay đổi về m&agrave;u sắc do t&ugrave;y thuộc v&agrave;o m&ugrave;a hoa trong năm.</p>\r\n', '1621248645Relief.jpeg', 1969000, 1),
(33, 5, 'Sympathy', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Sympathy.</p>\r\n', '<p><em>V&ograve;ng Hoa Chia Buồn Sympathy&nbsp;gồm:</em></p>\r\n\r\n<p><strong>-&nbsp;Hồng M&ocirc;n Trắng</strong></p>\r\n\r\n<p><strong>- C&uacute;c Mai&nbsp;</strong></p>\r\n\r\n<p><strong>- Mật Cật</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>-&nbsp;Kệ Hoa</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n\r\n<p>* Một số sản phẩm hoa c&oacute; thể thay đổi về m&agrave;u sắc do t&ugrave;y thuộc v&agrave;o m&ugrave;a hoa trong năm.</p>\r\n', '1621248742Sympathy.jpeg', 1659000, 0),
(34, 5, 'Eden', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Eden.</p>\r\n', '<p><em>V&ograve;ng&nbsp;Hoa Eden&nbsp;gồm:</em></p>\r\n\r\n<p><strong>- Lan Moraka</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa &amp; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>- Giấy g&oacute;i đen</strong></p>\r\n\r\n<p><strong>- Băng r&ocirc;n/ banner đ&iacute;nh k&egrave;m</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621248905Eden.jpeg', 2159000, 0),
(35, 5, 'Eternity', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Eternity.</p>\r\n', '<p><em>&nbsp;V&ograve;ng Hoa Eternity&nbsp;gồm:</em></p>\r\n\r\n<p><strong>- Lan Hồ Điệp</strong></p>\r\n\r\n<p><strong>- Hoa Baby</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa &amp; l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>- Băng r&ocirc;n/ banner đ&iacute;nh k&egrave;m</strong></p>\r\n\r\n<p><strong>*&nbsp;</strong>Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n', '1621248975Eternity.jpeg', 3759000, 0),
(36, 5, 'Condolences', '<p>Gửi lời chia sẻ tới người nhận với V&ograve;ng Hoa Chia Buồn Condolences.</p>\r\n', '<p><em>V&ograve;ng Hoa Chia Buồn Condolences gồm:</em></p>\r\n\r\n<p><strong>-&nbsp;C&uacute;c Mai Trắng</strong></p>\r\n\r\n<p><strong>- C&acirc;y Mật Cật</strong></p>\r\n\r\n<p><strong>- Đinh Lăng</strong></p>\r\n\r\n<p><strong>- L&aacute; Rong</strong></p>\r\n\r\n<p><strong>- C&aacute;c loại hoa, l&aacute; kh&aacute;c</strong></p>\r\n\r\n<p><strong>-&nbsp;Kệ Hoa</strong></p>\r\n\r\n<p>* Do mỗi sản phẩm đều được l&agrave;m thủ c&ocirc;ng n&ecirc;n sẽ c&oacute; ch&uacute;t kh&aacute;c biệt so với h&igrave;nh ảnh sẵn c&oacute; tr&ecirc;n website.</p>\r\n\r\n<p>* Một số sản phẩm hoa c&oacute; thể thay đổi về m&agrave;u sắc do t&ugrave;y thuộc v&agrave;o m&ugrave;a hoa trong năm.</p>\r\n', '1621249036Condolences.jpeg', 1659000, 0),
(37, 1, 'Crystal Pearl', '<p>B&oacute; hoa nhẹ nh&agrave;ng v&agrave; thanh khiết với hoa Cẩm T&uacute; Cầu đan xen với những đ&oacute;a hoa C&uacute;c Tana được g&oacute;i xinh xắn bằng giấy Kraft. Đ&acirc;y sẽ l&agrave; m&oacute;n qu&agrave; xinh xắn v&agrave; ho&agrave;n hảo d&agrave;nh tặng người thương, gia đ&igrave;nh hoặc bạn b&egrave;.</p>\r\n', '<p><em>&nbsp;B&oacute; Hoa Crystal Pearl bao gồm:</em></p>\r\n\r\n<p>- 3 B&ocirc;ng Cẩm T&uacute; Cầu</p>\r\n\r\n<p>- Hoa C&uacute;c Tana</p>\r\n\r\n<p>- C&aacute;c loại hoa v&agrave; l&aacute; kh&aacute;c</p>\r\n\r\n<p><em>Lưu &Yacute;: Do điều kiện &aacute;nh s&aacute;ng m&agrave; h&igrave;nh ảnh ngo&agrave;i đời sẽ c&oacute; ch&uacute;t kh&aacute;c biệt về m&agrave;u sắc so với h&igrave;nh ảnh tr&ecirc;n website.</em></p>\r\n', '1621249131Crystal_Pearl.jpeg', 499000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_slide`
--

CREATE TABLE `tbl_slide` (
  `pk_slide_id` int(11) NOT NULL,
  `c_name` varchar(200) NOT NULL,
  `c_img` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_slide`
--

INSERT INTO `tbl_slide` (`pk_slide_id`, `c_name`, `c_img`) VALUES
(1, 'slide 1', 'public/frontend/images/la.jpg'),
(2, 'Slide 2', 'public/frontend/images/slideshow1221b.jpg'),
(3, 'Slide 3', 'public/frontend/images/chicago.jpg'),
(4, 'Slide 4', 'public/frontend/images/ny.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_static`
--

CREATE TABLE `tbl_static` (
  `visited` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_static`
--

INSERT INTO `tbl_static` (`visited`) VALUES
(318);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_support_online`
--

CREATE TABLE `tbl_support_online` (
  `pk_support_onine_id` int(11) NOT NULL,
  `c_name` varchar(255) NOT NULL,
  `c_contact` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_support_online`
--

INSERT INTO `tbl_support_online` (`pk_support_onine_id`, `c_name`, `c_contact`) VALUES
(1, 'Tư vấn bán hàng 1', 'Mrs. Dung: (04) 3786 8904'),
(2, 'Tư vấn bán hàng 2', 'Mr. Tuấn: (04) 3786 8904'),
(3, 'Email liên hệ', 'support@mail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `pk_user_id` int(11) NOT NULL,
  `c_email` varchar(500) NOT NULL,
  `c_password` varchar(500) NOT NULL,
  `c_fullname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`pk_user_id`, `c_email`, `c_password`, `c_fullname`) VALUES
(2, 'huyentrang2000@gmail.com', '202cb962ac59075b964b07152d234b70', 'Hoàng Thị Huyền Trang'),
(4, 'ngvanb@gmail.com', '202cb962ac59075b964b07152d234b70', 'Nguyễn Văn B'),
(8, 'NVA@gmail.com', '202cb962ac59075b964b07152d234b70', 'Nguyễn Văn A'),
(9, 'admin@mail.com', '202cb962ac59075b964b07152d234b70', 'Nguyễn Văn A'),
(10, 'me@gmail.com', '202cb962ac59075b964b07152d234b70', 'My Name is Me');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_online`
--

CREATE TABLE `tbl_user_online` (
  `session_id` varchar(500) NOT NULL,
  `time_visited` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user_online`
--

INSERT INTO `tbl_user_online` (`session_id`, `time_visited`) VALUES
('glupg7groihn62q131ho9ftmn5', 1492944313);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category_product`
--
ALTER TABLE `tbl_category_product`
  ADD PRIMARY KEY (`pk_category_product_id`);

--
-- Indexes for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `tbl_order_detail`
--
ALTER TABLE `tbl_order_detail`
  ADD PRIMARY KEY (`order_detail_id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`pk_product_id`);

--
-- Indexes for table `tbl_slide`
--
ALTER TABLE `tbl_slide`
  ADD PRIMARY KEY (`pk_slide_id`);

--
-- Indexes for table `tbl_support_online`
--
ALTER TABLE `tbl_support_online`
  ADD PRIMARY KEY (`pk_support_onine_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`pk_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category_product`
--
ALTER TABLE `tbl_category_product`
  MODIFY `pk_category_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_customer`
--
ALTER TABLE `tbl_customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `tbl_order_detail`
--
ALTER TABLE `tbl_order_detail`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `pk_product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tbl_slide`
--
ALTER TABLE `tbl_slide`
  MODIFY `pk_slide_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_support_online`
--
ALTER TABLE `tbl_support_online`
  MODIFY `pk_support_onine_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `pk_user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
