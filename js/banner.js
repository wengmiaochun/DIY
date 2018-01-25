$(function(){
      // 这是轮播
      $('.btn>li').on('click',function(){
      	//调试debugger;
	    // alert(222);
        index = $('.btn>li').index(this);
        $(this).css('background-color','#1addf9').siblings().css('background-color','white');
        // 透明度不支持css改变，所以用rgba
        $('.list>li').eq(index).animate({'opacity' :1},{queue:false,duration:1000}).siblings().animate({'opacity' : 0},{queue:false,duration:1500});
      });

      var timer = null;
      var index = 0;
      timer = setInterval(function(){
        $('.btn>li').eq(index).trigger('click');
        //trigger，让元素触发一个事件
        index++;
        if( index > 2 ){
          index = 0;
        }
      },4000)

//二维码变大
$(".code > img").hover(
  function () {
    // $(".code > img").show();
    $(this).css("width","40%");
  },
  function () {
    $(this).css("width","20%");  
  }
);

//右边图片鼠标滑过出现蓝色边框
$(".r_img >img").hover( 
  function () {
    $(this).css("border","2px solid #1addf9");
  },
  function () {
    $(this).css("border","0px");  
  }
);

//返回顶部
$(".totop").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }
  ); 
//原创投稿
$(".original_title").click(function(){
    $(".artitle").slideToggle("slow");
  });

})

