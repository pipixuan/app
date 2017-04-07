<?php
	
	// 接口
	$pathName = 'https://moment.douban.com/api/stream/date/';

	// 请求参数
	$queryString = '?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

	// 获取参数
	$day = isset($_GET['day']) ? $_GET['day'] : 0;

	// 格式化日期
	$date = date('Y-m-d', strtotime($day . 'day'));

	// 下次请求
	$day--;

	// 拼凑参数
	$url = $pathName . $date . $queryString;

	// 获取一刻数据
	$result = file_get_contents($url);

	// 转成数组
	$result = json_decode($result);

	// 转成json返回
	echo json_encode(array('day'=>$day, 'result'=>$result));

?>