/*
 * 重置密码成功后自动挑转到登录页
 */
$(function() {
	
	var time = setInterval(showTime, 1000);
	var second = 5;
	function showTime() {
		if(second == 0) {
			window.location = "denglu.html";
			clearInterval(time);
		}
		$(".mimazh_s p span").text(second);
		second--;
	}
})