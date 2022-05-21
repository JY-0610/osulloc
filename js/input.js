$(function() { 
$( "#datepicker").datepicker({ 
closeText: "닫기", currentText: "오늘", prevText: '이전 달', nextText: '다음 달', 
monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], 
dayNames: ['일', '월', '화', '수', '목', '금', '토'], dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'], 
dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], weekHeader: "주", yearSuffix: '년',
minDate: "1", maxDate: "+1Y"

});
 });
/*달력 크기,위치 */

$('#datepicker').click(function(){  
  var pTop = '5.7em';  
  var pLeft = '41.5em'; 
  var pWidth ='275px';
  $('#ui-datepicker-div').css({'left':pLeft, 'top':pTop,'width':pWidth});
});


$('.sel-box').on('click',function(){
$('.sel-option').toggleClass('on');

});
$('.select-people').on('click',function(){
 $('.p-option').toggleClass('on');
});




// $('#time-option').on('click',function(){
//   var tOption = $('#time-option input[type=radio]:checked').val();
//   console.log(tOption);
// });

$('#time-option').on('click',function(){
  test();
 });



 

