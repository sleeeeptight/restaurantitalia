// 서브메뉴 한개씩 나오는 코드

$("nav > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
 });
 $("nav > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
 });


// 메뉴전체

// $("nav > ul > li").mouseover(function (){
//    $("ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//    $("ul.sub").stop().slideUp(200);
// });



// 

// $("nav > ul > li").mouseover(function (){
//    $(".nav_bg,ul.sub").stop().slideDown(200);
// });
// $("nav > ul > li").mouseout(function () {
//    $(".nav_bg,ul.sub").stop().slideUp(200);
// });







//  햄버거메뉴

$(function(){
   var pull=$('#pull');
       menu=$('nav ul');
       menuHeight=menu.height();   	      
$(pull).on('click', function(e){
   e.preventDefault();
   menu.slideToggle();   	      	
});
$(window).resize(function(){
   var w=$(window).width();
   if(w>600 && menu.is(':hidden'))
       {menu.removeAttr('style');}
});
});


// 탭

$(".notice_box h2").click(function () {
   $(".notice_box h2,.notice_box ul").removeClass("on");
   $(this).addClass("on");
   $(this).next("ul").addClass("on");
});
