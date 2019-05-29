<?php 
	header('Content-type:application/json;charset=utf-8');
	header('Cache-Control:max-age=0');
	$i = 0;
	while($i < 9){
		$i++;
		// $res = array('success' => 'ok','text' => '我是测试的文本');
		// echo json_encode($res);
		sleep(1);
		$random = rand(1,999);
		echo $random;
		echo "<br/>";
		ob_flush();
		flush();
	}
?>