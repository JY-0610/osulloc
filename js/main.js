

/*banner*/

setImageSlide('#slide:eq(0)', 1, false, 3000);
setImageSlide('#slide:eq(1)', 1, false);
setImageSlide('#slide:eq(2)', 1, false);
function setImageSlide(selector,first,status,speed){

var $selector = $(selector);
var numSlide = $('.banner-list > li').length;
var numView =$('.banner > li').length; 
var slideNow = first;
var slidePrev = 1;
var slideNext = 0;
var slideFirst = first;
var timerId='';
var timerSpeed = speed;
var isTimerOn =status;

$('.p-control').on('click', function() {
  if (isTimerOn === true) {
    stopTimer();
  } else {
    startTimer();
  }
});


showSlide(slideFirst);

$('ul.indicator li a').on('click',function(){
  var index = $selector.find('ul.indicator li').index($(this).parent());
 showSlide(index + 1);
});
$('a.prev').on('click', function(e) {
  e.preventDefault();
  $('.banner').each(function(){
    $('.banner > li').css('transform',"translateX(" + -(numView)  + "px)")


  });

  showSlide(slidePrev);


});

$('a.next').on('click', function(e) {
  e.preventDefault();
  $('.banner').each(function(){
    $('.banner > li').stop(true).css('transform',"translateX(" + -(numView * 65)  + "px)").css({'transition': ' 0.5s'}) 
  });
  showSlide(slideNext);

});

$selector.find('.p-control').on('click', function() {
  if(isTimerOn===true) {
    stopTimer();
  }else{
    startTimer();
  }

  
});
function startTimer() {
  timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);
  $('.p-control').addClass('on');
  isTimerOn = true;
}
  
function stopTimer() {
  clearTimeout(timerId);
  $('.p-control').removeClass('on');
  isTimerOn = false;
}
  
function resetTimer() {
  clearTimeout(timerId);

  if (isTimerOn === true) {
    timerId = setTimeout(function() {showSlide(slideNext);}, timerSpeed);

  }
}


function showSlide(n) {
  resetTimer();

  $('div.main-banner ul.banner-list li').css({'display': 'none'});

  $('div.main-banner ul.banner-list li:eq(' + (n - 1) + ')').css({'display': 'block'});

  $('ul.indicator li').removeClass('on');
  $('ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
  slideNow = n;
  slidePrev = (n === 1) ? numSlide : (n - 1);
  slideNext = (n === numSlide) ? 1 : (n + 1);

}
console.log(slideNow+'/'+slidePrev+'/'+slideNext);

}



counter();
// 디데이 카운트
function counter(){
  var dday = new Date("June 31,2022,09:00:00").getTime(); //디데이
setInterval(function(){
  var now = new Date(); //현재 날짜 가져오기
  var distance = dday - now;
//  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);
  if(sec < 10){
    sec = '0'+sec;
  }
  $('span.time').html( +hour+':'+min+':'+sec)
}, 1000);
}



