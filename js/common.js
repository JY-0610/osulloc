/*gnb*/

  
$('#header ul.top-menu > li > a').on('mouseenter', function () {
  $('#lnb').addClass('on')
   

   });
     
$('#lnb').on('mouseleave', function () {
  $('#lnb').removeClass('on')
});

$('.tea1').on('mouseenter',function(){
$('#lnb ul.sub').addClass('on');
});
$('.tea1').on('mouseleave',function(){
$('#lnb ul.sub').removeClass('on');
});

$('.tea2').on('mouseenter',function(){
 $('#lnb ul.sub2').addClass('on');

});
$('.tea2').on('mouseleave',function(){
 $('#lnb ul.sub2').removeClass('on');

});
 
