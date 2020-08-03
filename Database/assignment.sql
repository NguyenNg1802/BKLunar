-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2018 at 04:01 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country_code` varchar(2) NOT NULL DEFAULT '',
  `country_name` varchar(100) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_code`, `country_name`) VALUES
(1, 'AF', 'Afghanistan'),
(2, 'AL', 'Albania'),
(3, 'DZ', 'Algeria'),
(4, 'DS', 'American Samoa'),
(5, 'AD', 'Andorra'),
(6, 'AO', 'Angola'),
(7, 'AI', 'Anguilla'),
(8, 'AQ', 'Antarctica'),
(9, 'AG', 'Antigua and Barbuda'),
(10, 'AR', 'Argentina'),
(11, 'AM', 'Armenia'),
(12, 'AW', 'Aruba'),
(13, 'AU', 'Australia'),
(14, 'AT', 'Austria'),
(15, 'AZ', 'Azerbaijan'),
(16, 'BS', 'Bahamas'),
(17, 'BH', 'Bahrain'),
(18, 'BD', 'Bangladesh'),
(19, 'BB', 'Barbados'),
(20, 'BY', 'Belarus'),
(21, 'BE', 'Belgium'),
(22, 'BZ', 'Belize'),
(23, 'BJ', 'Benin'),
(24, 'BM', 'Bermuda'),
(25, 'BT', 'Bhutan'),
(26, 'BO', 'Bolivia'),
(27, 'BA', 'Bosnia and Herzegovina'),
(28, 'BW', 'Botswana'),
(29, 'BV', 'Bouvet Island'),
(30, 'BR', 'Brazil'),
(31, 'IO', 'British Indian Ocean Territory'),
(32, 'BN', 'Brunei Darussalam'),
(33, 'BG', 'Bulgaria'),
(34, 'BF', 'Burkina Faso'),
(35, 'BI', 'Burundi'),
(36, 'KH', 'Cambodia'),
(37, 'CM', 'Cameroon'),
(38, 'CA', 'Canada'),
(39, 'CV', 'Cape Verde'),
(40, 'KY', 'Cayman Islands'),
(41, 'CF', 'Central African Republic'),
(42, 'TD', 'Chad'),
(43, 'CL', 'Chile'),
(44, 'CN', 'China'),
(45, 'CX', 'Christmas Island'),
(46, 'CC', 'Cocos (Keeling) Islands'),
(47, 'CO', 'Colombia'),
(48, 'KM', 'Comoros'),
(49, 'CG', 'Congo'),
(50, 'CK', 'Cook Islands'),
(51, 'CR', 'Costa Rica'),
(52, 'HR', 'Croatia (Hrvatska)'),
(53, 'CU', 'Cuba'),
(54, 'CY', 'Cyprus'),
(55, 'CZ', 'Czech Republic'),
(56, 'DK', 'Denmark'),
(57, 'DJ', 'Djibouti'),
(58, 'DM', 'Dominica'),
(59, 'DO', 'Dominican Republic'),
(60, 'TP', 'East Timor'),
(61, 'EC', 'Ecuador'),
(62, 'EG', 'Egypt'),
(63, 'SV', 'El Salvador'),
(64, 'GQ', 'Equatorial Guinea'),
(65, 'ER', 'Eritrea'),
(66, 'EE', 'Estonia'),
(67, 'ET', 'Ethiopia'),
(68, 'FK', 'Falkland Islands (Malvinas)'),
(69, 'FO', 'Faroe Islands'),
(70, 'FJ', 'Fiji'),
(71, 'FI', 'Finland'),
(72, 'FR', 'France'),
(73, 'FX', 'France, Metropolitan'),
(74, 'GF', 'French Guiana'),
(75, 'PF', 'French Polynesia'),
(76, 'TF', 'French Southern Territories'),
(77, 'GA', 'Gabon'),
(78, 'GM', 'Gambia'),
(79, 'GE', 'Georgia'),
(80, 'DE', 'Germany'),
(81, 'GH', 'Ghana'),
(82, 'GI', 'Gibraltar'),
(83, 'GK', 'Guernsey'),
(84, 'GR', 'Greece'),
(85, 'GL', 'Greenland'),
(86, 'GD', 'Grenada'),
(87, 'GP', 'Guadeloupe'),
(88, 'GU', 'Guam'),
(89, 'GT', 'Guatemala'),
(90, 'GN', 'Guinea'),
(91, 'GW', 'Guinea-Bissau'),
(92, 'GY', 'Guyana'),
(93, 'HT', 'Haiti'),
(94, 'HM', 'Heard and Mc Donald Islands'),
(95, 'HN', 'Honduras'),
(96, 'HK', 'Hong Kong'),
(97, 'HU', 'Hungary'),
(98, 'IS', 'Iceland'),
(99, 'IN', 'India'),
(100, 'IM', 'Isle of Man'),
(101, 'ID', 'Indonesia'),
(102, 'IR', 'Iran (Islamic Republic of)'),
(103, 'IQ', 'Iraq'),
(104, 'IE', 'Ireland'),
(105, 'IL', 'Israel'),
(106, 'IT', 'Italy'),
(107, 'CI', 'Ivory Coast'),
(108, 'JE', 'Jersey'),
(109, 'JM', 'Jamaica'),
(110, 'JP', 'Japan'),
(111, 'JO', 'Jordan'),
(112, 'KZ', 'Kazakhstan'),
(113, 'KE', 'Kenya'),
(114, 'KI', 'Kiribati'),
(115, 'KP', 'Korea, Democratic People\'s Republic of'),
(116, 'KR', 'Korea, Republic of'),
(117, 'XK', 'Kosovo'),
(118, 'KW', 'Kuwait'),
(119, 'KG', 'Kyrgyzstan'),
(120, 'LA', 'Lao People\'s Democratic Republic'),
(121, 'LV', 'Latvia'),
(122, 'LB', 'Lebanon'),
(123, 'LS', 'Lesotho'),
(124, 'LR', 'Liberia'),
(125, 'LY', 'Libyan Arab Jamahiriya'),
(126, 'LI', 'Liechtenstein'),
(127, 'LT', 'Lithuania'),
(128, 'LU', 'Luxembourg'),
(129, 'MO', 'Macau'),
(130, 'MK', 'Macedonia'),
(131, 'MG', 'Madagascar'),
(132, 'MW', 'Malawi'),
(133, 'MY', 'Malaysia'),
(134, 'MV', 'Maldives'),
(135, 'ML', 'Mali'),
(136, 'MT', 'Malta'),
(137, 'MH', 'Marshall Islands'),
(138, 'MQ', 'Martinique'),
(139, 'MR', 'Mauritania'),
(140, 'MU', 'Mauritius'),
(141, 'TY', 'Mayotte'),
(142, 'MX', 'Mexico'),
(143, 'FM', 'Micronesia, Federated States of'),
(144, 'MD', 'Moldova, Republic of'),
(145, 'MC', 'Monaco'),
(146, 'MN', 'Mongolia'),
(147, 'ME', 'Montenegro'),
(148, 'MS', 'Montserrat'),
(149, 'MA', 'Morocco'),
(150, 'MZ', 'Mozambique'),
(151, 'MM', 'Myanmar'),
(152, 'NA', 'Namibia'),
(153, 'NR', 'Nauru'),
(154, 'NP', 'Nepal'),
(155, 'NL', 'Netherlands'),
(156, 'AN', 'Netherlands Antilles'),
(157, 'NC', 'New Caledonia'),
(158, 'NZ', 'New Zealand'),
(159, 'NI', 'Nicaragua'),
(160, 'NE', 'Niger'),
(161, 'NG', 'Nigeria'),
(162, 'NU', 'Niue'),
(163, 'NF', 'Norfolk Island'),
(164, 'MP', 'Northern Mariana Islands'),
(165, 'NO', 'Norway'),
(166, 'OM', 'Oman'),
(167, 'PK', 'Pakistan'),
(168, 'PW', 'Palau'),
(169, 'PS', 'Palestine'),
(170, 'PA', 'Panama'),
(171, 'PG', 'Papua New Guinea'),
(172, 'PY', 'Paraguay'),
(173, 'PE', 'Peru'),
(174, 'PH', 'Philippines'),
(175, 'PN', 'Pitcairn'),
(176, 'PL', 'Poland'),
(177, 'PT', 'Portugal'),
(178, 'PR', 'Puerto Rico'),
(179, 'QA', 'Qatar'),
(180, 'RE', 'Reunion'),
(181, 'RO', 'Romania'),
(182, 'RU', 'Russian Federation'),
(183, 'RW', 'Rwanda'),
(184, 'KN', 'Saint Kitts and Nevis'),
(185, 'LC', 'Saint Lucia'),
(186, 'VC', 'Saint Vincent and the Grenadines'),
(187, 'WS', 'Samoa'),
(188, 'SM', 'San Marino'),
(189, 'ST', 'Sao Tome and Principe'),
(190, 'SA', 'Saudi Arabia'),
(191, 'SN', 'Senegal'),
(192, 'RS', 'Serbia'),
(193, 'SC', 'Seychelles'),
(194, 'SL', 'Sierra Leone'),
(195, 'SG', 'Singapore'),
(196, 'SK', 'Slovakia'),
(197, 'SI', 'Slovenia'),
(198, 'SB', 'Solomon Islands'),
(199, 'SO', 'Somalia'),
(200, 'ZA', 'South Africa'),
(201, 'GS', 'South Georgia South Sandwich Islands'),
(202, 'SS', 'South Sudan'),
(203, 'ES', 'Spain'),
(204, 'LK', 'Sri Lanka'),
(205, 'SH', 'St. Helena'),
(206, 'PM', 'St. Pierre and Miquelon'),
(207, 'SD', 'Sudan'),
(208, 'SR', 'Suriname'),
(209, 'SJ', 'Svalbard and Jan Mayen Islands'),
(210, 'SZ', 'Swaziland'),
(211, 'SE', 'Sweden'),
(212, 'CH', 'Switzerland'),
(213, 'SY', 'Syrian Arab Republic'),
(214, 'TW', 'Taiwan'),
(215, 'TJ', 'Tajikistan'),
(216, 'TZ', 'Tanzania, United Republic of'),
(217, 'TH', 'Thailand'),
(218, 'TG', 'Togo'),
(219, 'TK', 'Tokelau'),
(220, 'TO', 'Tonga'),
(221, 'TT', 'Trinidad and Tobago'),
(222, 'TN', 'Tunisia'),
(223, 'TR', 'Turkey'),
(224, 'TM', 'Turkmenistan'),
(225, 'TC', 'Turks and Caicos Islands'),
(226, 'TV', 'Tuvalu'),
(227, 'UG', 'Uganda'),
(228, 'UA', 'Ukraine'),
(229, 'AE', 'United Arab Emirates'),
(230, 'GB', 'United Kingdom'),
(231, 'US', 'United States'),
(232, 'UM', 'United States minor outlying islands'),
(233, 'UY', 'Uruguay'),
(234, 'UZ', 'Uzbekistan'),
(235, 'VU', 'Vanuatu'),
(236, 'VA', 'Vatican City State'),
(237, 'VE', 'Venezuela'),
(238, 'VN', 'Vietnam'),
(239, 'VG', 'Virgin Islands (British)'),
(240, 'VI', 'Virgin Islands (U.S.)'),
(241, 'WF', 'Wallis and Futuna Islands'),
(242, 'EH', 'Western Sahara'),
(243, 'YE', 'Yemen'),
(244, 'ZR', 'Zaire'),
(245, 'ZM', 'Zambia'),
(246, 'ZW', 'Zimbabwe');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `product_id`, `quantity`) VALUES
(2, 3, 30, 1),
(3, 3, 31, 1),
(4, 3, 63, 1),
(5, 3, 63, 10),
(6, 3, 73, 5);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` bigint(20) NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `prod_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_category` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `prod_type`, `sub_category`) VALUES
(29, 'Hot Milk Coffee', 29000, 'prod_img/coffee/traditional-coffee/hot-milk-coffee.jpg', 'Coffee', 'Traditional Coffee'),
(30, 'Iced Milk Coffee', 29000, 'prod_img/coffee/traditional-coffee/iced-milk-coffee.jpg', 'Coffee', 'Traditional Coffee'),
(31, 'Hot Black Coffee', 29000, 'prod_img/coffee/traditional-coffee/hot-black-coffee.jpg', 'Coffee', 'Traditional Coffee'),
(32, 'Iced Black Coffee', 29000, 'prod_img/coffee/traditional-coffee/iced-black-coffee.jpg', 'Coffee', 'Traditional Coffee'),
(33, 'Caramel  Macchiato', 59000, 'prod_img/coffee/espresso/caramel-macchiato.jpg', 'Coffee', 'Espresso'),
(34, 'Mocha', 59000, 'prod_img/coffee/espresso/mocha.jpg', 'Coffee', 'Espresso'),
(35, 'Latte', 54000, 'prod_img/coffee/espresso/latte.jpg', 'Coffee', 'Espresso'),
(36, 'Cappuccino', 54000, 'prod_img/coffee/espresso/cappuccino.jpg', 'Coffee', 'Espresso'),
(37, 'Americano', 44000, 'prod_img/coffee/espresso/americano.jpg', 'Coffee', 'Espresso'),
(38, 'Espresso', 44000, 'prod_img/coffee/espresso/espresso.jpg', 'Coffee', 'Espresso'),
(39, 'Cafe Latte', 54000, 'prod_img/coffee/espresso/cafe-latte.jpg', 'Coffee', 'Espresso'),
(40, 'Iced Cafe Latte', 54000, 'prod_img/coffee/espresso/iced-cafe-latte.jpg', 'Coffee', 'Espresso'),
(41, 'Skinny Flavored Latte', 50000, 'prod_img/coffee/espresso/skinny-flavored-latte.jpg', 'Coffee', 'Espresso'),
(42, 'Iced Skinny Flavored Latte', 50000, 'prod_img/coffee/espresso/iced-skinny-flavored-latte.jpg', 'Coffee', 'Espresso'),
(43, 'Flavored Latte', 55000, 'prod_img/coffee/espresso/flavored-latte.jpg', 'Coffee', 'Espresso'),
(44, 'Iced Flavored Latte', 55000, 'prod_img/coffee/espresso/iced-flavored-latte.jpg', 'Coffee', 'Espresso'),
(45, 'Iced Caramel Macchiato Latte', 60000, 'prod_img/coffee/espresso/iced-caramel-macchiato-latte.jpg', 'Coffee', 'Espresso'),
(46, 'Cafe Mocha', 59000, 'prod_img/coffee/espresso/cafe-latte.jpg', 'Coffee', 'Espresso'),
(47, 'Iced Cafe Mocha', 59000, 'prod_img/coffee/espresso/cafe-latte.jpg', 'Coffee', 'Espresso'),
(48, 'Espresso Macchiato', 60000, 'prod_img/coffee/espresso/espresso-macchiato.jpg', 'Coffee', 'Espresso'),
(49, 'Espresso Con Panna', 60000, 'prod_img/coffee/espresso/espresso-con-panna.jpg', 'Coffee', 'Espresso'),
(50, 'Hazelnut Macchiato', 60000, 'prod_img/coffee/espresso/hazelnut-macchiato.jpg', 'Coffee', 'Espresso'),
(51, 'Ristretto Bianco', 60000, 'prod_img/coffee/espresso/ristretto-bianco.jpg', 'Coffee', 'Espresso'),
(52, 'Frappuccino Blended', 55000, 'prod_img/coffee/blended/frappuccino-blended.jpg', 'Coffee', 'Ice Blended'),
(53, 'Frappuccino Light Blended', 55000, 'prod_img/coffee/blended/frappuccino-light-blended.jpg', 'Coffee', 'Ice Blended'),
(54, 'Espresso Blended', 54000, 'prod_img/coffee/blended/espresso-blended.jpg', 'Coffee', 'Ice Blended'),
(55, 'Espresso Light Blended', 54000, 'prod_img/coffee/blended/espresso-light-blended.jpg', 'Coffee', 'Ice Blended'),
(56, 'Caramel Blended', 50000, 'prod_img/coffee/blended/caramel-blended.jpg', 'Coffee', 'Ice Blended'),
(57, 'Caramel Light Blended', 50000, 'prod_img/coffee/blended/caramel-light-blended.jpg', 'Coffee', 'Ice Blended'),
(58, 'Mocha Frappuccino Blended', 57000, 'prod_img/coffee/blended/mocha-frappuccino-blended.jpg', 'Coffee', 'Ice Blended'),
(59, 'Mocha Frappuccino Light Blended', 57000, 'prod_img/coffee/blended/mocha-frappuccino-blended.jpg', 'Coffee', 'Ice Blended'),
(60, 'Java Chip Frappuccino Blended', 60000, 'prod_img/coffee/blended/java-chip-frappuccino-blended.jpg', 'Coffee', 'Ice Blended'),
(61, 'Bubble Milk Tea', 45000, 'prod_img/milk/milk_tea/bubble-milk.jpg', 'Milk', 'Milk Tea'),
(62, 'Golden Green Tea', 39000, 'prod_img/milk/milk_tea/goldengreen-milk.jpg', 'Milk', 'Milk Tea'),
(63, 'Neptune Milk Tea', 55000, 'prod_img/milk/milk_tea/neptune-milk.jpg', 'Milk', 'Milk Tea'),
(64, 'Rose Puer Milk Tea', 55000, 'prod_img/milk/milk_tea/rosepuer-milk.jpg', 'Milk', 'Milk Tea'),
(65, 'Signature Milk Tea', 39000, 'prod_img/milk/milk_tea/signature-milk.jpg', 'Milk', 'Milk Tea'),
(66, 'HongKong Milk Tea', 62000, 'prod_img/milk/milk_tea/hongkong-milk.jpg', 'Milk', 'Milk Tea'),
(67, 'Roasted Oolong Milk Tea', 55000, 'prod_img/milk/milk_tea/roastedoolong-milk.jpg', 'Milk', 'Milk Tea'),
(68, 'Herb Jelly Milk Tea', 45000, 'prod_img/milk/milk_tea/herbjelly-milk.jpg', 'Milk', 'Milk Tea'),
(69, 'Honey Milk Tea', 43000, 'prod_img/milk/milk_tea/honey-milk-tea.jpg', 'Milk', 'Milk Tea'),
(70, 'Mango Milk Tea', 48000, 'prod_img/milk/milk_tea/mango-milk-tea.jpg', 'Milk', 'Milk Tea'),
(71, 'Taro Milk Tea', 48000, 'prod_img/milk/milk_tea/taro-milk-tea.jpg', 'Milk', 'Milk Tea'),
(72, 'Bubble Fresh Milk', 48000, 'prod_img/milk/fresh_milk/bubble-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(73, 'Cocoa Fresh Milk', 53000, 'prod_img/milk/fresh_milk/cocoa-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(74, 'Herb Fresh Milk', 48000, 'prod_img/milk/fresh_milk/herb-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(75, 'Matcha Fresh Milk', 48000, 'prod_img/milk/fresh_milk/matcha-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(76, 'Chai Tea', 24000, 'prod_img/tea/chai-tea.jpg', 'Tea', 'Brewed Tea'),
(77, 'Chai Tea Latte', 29000, 'prod_img/tea/chai-tea-latte.jpg', 'Tea', 'Brewed Tea'),
(78, 'Iced Chai Latte', 32000, 'prod_img/tea/iced-chai-latte.jpg', 'Tea', 'Brewed Tea'),
(79, 'Chamomile Blend', 31000, 'prod_img/tea/chamomile-blend.jpg', 'Tea', 'Brewed Tea'),
(80, 'English Breakfast', 38000, 'prod_img/tea/english-breakfast.jpg', 'Tea', 'Brewed Tea'),
(81, 'Mint Blend', 32000, 'prod_img/tea/mint-blend.jpg', 'Tea', 'Brewed Tea'),
(82, 'Supermint Green', 35000, 'prod_img/tea/speermint-green.jpg', 'Tea', 'Brewed Tea'),
(83, 'Earl Grey', 28000, 'prod_img/tea/earl-grey.jpg', 'Tea', 'Brewed Tea'),
(84, 'IcedShaken Hibicus Tea', 30000, 'prod_img/tea/icedshaken-hibicus-tea.jpg', 'Tea', 'Brewed Tea'),
(85, 'Black Shaken Iced Tea', 39000, 'prod_img/tea/black-shaken-iced-tea.jpg', 'Tea', 'Brewed Tea'),
(86, 'Ceylon Black Tea', 33000, 'prod_img/tea/ceylon-black-tea.png', 'Tea', 'Premium Teapresso'),
(87, 'Jin Xuan Tea', 51000, 'prod_img/tea/jin-xuan-tea.png', 'Tea', 'Premium Teapresso'),
(88, 'Neptune Tea', 51000, 'prod_img/tea/neptune-tea.png', 'Tea', 'Premium Teapresso'),
(89, 'Osmanthus Four Seasons Oolong Tea', 58000, 'prod_img/tea/osmanthus-four-seasons-oolong-tea.png', 'Tea', 'Premium Teapresso'),
(90, 'Peach Oolong Tea', 55000, 'prod_img/tea/peach-oolong-tea.png', 'Tea', 'Premium Teapresso'),
(91, 'Rose Puer Tea', 51000, 'prod_img/tea/rose-puer-tea.png', 'Tea', 'Premium Teapresso'),
(92, 'Roselle Honey Black Tea', 55000, 'prod_img/tea/roselle-honey-black-tea.png', 'Tea', 'Premium Teapresso'),
(93, 'Uva Black Tea', 51000, 'prod_img/tea/uva-black-tea.png', 'Tea', 'Premium Teapresso'),
(94, 'Jasmine Green Tea', 33000, 'prod_img/tea/jasmine-green-tea.png', 'Tea', 'Premium Teapresso'),
(95, 'Roasted Oolong Tea', 51000, 'prod_img/tea/roasted-oolong-tea.png', 'Tea', 'Premium Teapresso'),
(96, '4 Seasons Tea', 24000, 'prod_img/tea/4-seasons-tea.jpg', 'Tea', 'Premium Teapresso'),
(97, 'Darjeeling Tea', 29000, 'prod_img/tea/darjeeling-tea.jpg', 'Tea', 'Premium Teapresso'),
(98, 'Lichee Lemon Tea', 32000, 'prod_img/tea/lichee-lemon-tea.jpg', 'Tea', 'Brewed Tea'),
(99, 'Kumquat tea', 31000, 'prod_img/tea/kumquat-tea.jpg', 'Tea', 'Brewed Tea'),
(100, 'Peach Lemon Glass tea', 38000, 'prod_img/tea/peach-lemonglass-tea.jpg', 'Tea', 'Brewed Tea'),
(101, 'Black Matchiato', 32000, 'prod_img/tea/black-machiato-tea.jpg', 'Tea', 'Brewed Tea'),
(102, 'Peach Plum Tea', 35000, 'prod_img/tea/peach-plum-tea.png', 'Tea', 'Brewed Tea'),
(103, 'Alisan Tea', 28000, 'prod_img/tea/alisan-tea.png', 'Tea', 'Premium Teapresso'),
(104, 'Classic Green Tea', 30000, 'prod_img/tea/classic-green-tea.jpg', 'Tea', 'Brewed Tea'),
(105, 'Water Melon Tea', 39000, 'prod_img/tea/water-melon-tea.jpg', 'Tea', 'Brewed Tea'),
(110, 'Liche Mango Tea', 33000, 'prod_img/tea/liche-mango-tea.png', 'Tea', 'Premium Teapresso'),
(111, 'Blueberry Fresh Milk', 32000, 'prod_img/milk/fresh_milk/blueberry-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(112, 'Caramel Fresh Milk', 35000, 'prod_img/milk/fresh_milk/caramel-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(113, 'Mint Fresh Milk', 29000, 'prod_img/milk/fresh_milk/mint-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(114, 'Orange Fresh Milk', 28000, 'prod_img/milk/fresh_milk/orange-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(115, 'Strawberry Fresh Milk', 31000, 'prod_img/milk/fresh_milk/strawberry-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(116, 'Taro Fresh Milk', 34000, 'prod_img/milk/fresh_milk/taro-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(117, 'Halzenut Fresh Milk', 32000, 'prod_img/milk/fresh_milk/halzenut-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(118, 'Pandan Fresh Milk', 32000, 'prod_img/milk/fresh_milk/pandan-fresh-milk.jpg', 'Milk', 'Fresh Milk'),
(119, 'Chocolate Milk Tea', 29000, 'prod_img/milk/milk_tea/chocolate-milk-tea.jpg', 'Milk', 'Milk Tea'),
(120, 'Hokaido Milk Tea', 32000, 'prod_img/milk/milk_tea/hokaido-milk-tea.jpg', 'Milk', 'Milk Tea'),
(121, 'Earl Grey Milk Tea', 32000, 'prod_img/milk/milk_tea/earl-grey-milk-tea.jpg', 'Milk', 'Milk Tea'),
(122, 'Matcha Bean Milk Tea', 32000, 'prod_img/milk/milk_tea/matcha-bean-milk-tea.jpg', 'Milk', 'Milk Tea'),
(123, 'Peach Milk Tea', 32000, 'prod_img/milk/milk_tea/peach-milk-tea.jpg', 'Milk', 'Milk Tea'),
(124, 'Choco Mint Milk Tea', 32000, 'prod_img/milk/milk_tea/choco-mint-milk-tea.jpg', 'Milk', 'Milk Tea'),
(125, 'Kiwi Milk Tea', 33000, 'prod_img/milk/milk_tea/kiwi-milk-tea.jpg', 'Milk', 'Milk Tea'),
(126, 'Stawberry Milk Tea', 32000, 'prod_img/milk/milk_tea/strawberry-milk-tea.jpg', 'Milk', 'Milk Tea'),
(127, 'Almond Milk Tea', 32000, 'prod_img/milk/milk_tea/almond-milk-tea.jpg', 'Milk', 'Milk Tea'),
(128, 'Vani Milk Tea', 32000, 'prod_img/milk/milk_tea/vani-milk-tea.jpg', 'Milk', 'Milk Tea'),
(129, 'Mint Milk Tea', 32000, 'prod_img/milk/milk_tea/mint-milk-tea.jpg', 'Milk', 'Milk Tea'),
(130, 'Taichi Milk Tea', 32000, 'prod_img/milk/milk_tea/taichi-milk-tea.jpg', 'Milk', 'Milk Tea'),
(131, 'Orange Milk Tea', 32000, 'prod_img/milk/milk_tea/orange-milk-tea.jpg', 'Milk', 'Milk Tea'),
(132, 'Pandan Milk Tea', 32000, 'prod_img/milk/milk_tea/pandan-milk-tea.jpg', 'Milk', 'Milk Tea');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `googleid` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebookid` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `role` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstname`, `lastname`, `googleid`, `facebookid`, `phone`, `country`, `birthdate`, `role`, `address`, `type`) VALUES
(2, 'mailethai01@gmail.com', NULL, 'Thái', 'Mai', '114618232084208052632', NULL, NULL, NULL, NULL, 'user', NULL, 'google'),
(3, 'thai@gmail.com', '25f9e794323b453885f5181f1b624d0b', 'Thai', 'Mai', NULL, NULL, '', '', '1997-04-14', 'user', '169A Dao Cam Moc', 'email'),
(19, 'mailethai01@gmail.com', '7337f62694fedf9fedb32d7732de629f', 'Thai', 'Mai', NULL, NULL, NULL, NULL, '1997-04-14', 'admin', NULL, 'email');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `country_code_2` (`country_code`),
  ADD UNIQUE KEY `country_code_3` (`country_code`),
  ADD UNIQUE KEY `country_name` (`country_name`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_product` (`product_id`),
  ADD KEY `order_user` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);
ALTER TABLE `products` ADD FULLTEXT KEY `name_2` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `googleid` (`googleid`,`facebookid`),
  ADD UNIQUE KEY `facebookid` (`facebookid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
