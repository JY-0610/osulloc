

// 디데이 카운트
function counter(){
    var dday = new Date("June 31,2022,09:00:00").getTime(); //디데이
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
		var distance = dday - now;
  //  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){
			s = '0'+s;
		}
		$('span.time').html( +h+':'+m+':'+s)
	}, 1000);
}
counter();