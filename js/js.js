$(function(){



      // 这是轮播
      $('#btn>li').on('click',function(){
        index = $('#btn>li').index(this);
        $(this).css('background','white').siblings().css('background','rgba(0,0,0,0)');
        // 透明度不支持css改变，所以用rgba
        $('#list>li').eq(index).animate({'opacity' : 1},{queue:false,duration:1500}).siblings().animate({'opacity' : 0},{queue:false,duration:1500});
      });

      var timer = null;
      var index = 1;
      timer = setInterval(function(){
        $('#btn>li').eq(index).trigger('click');
        //trigger，让元素触发一个事件
        index++;
        if( index > 3 ){
          index = 0;
        }
      },4000)


      //这是首页的滚动
      $(window).on('scroll',function(){
        var scrollTop = $(window).scrollTop();
        var k = 4;
        $('#phone_container ul li').each(function(i){
            $(this).find("div").each(function(j){
                $(this).css("marginTop",scrollTop/Math.ceil((i+j)+k))
            })
        })

      })
      //这是首页下面文字的变化
      $('#explaim').mouseover(function(){
        $('#explaim_container').children().eq(0).animate({opacity : 1,fontSize:50 + 'px'},1500)
        $('#explaim_container').children('p').animate({opacity : 1},500)
        
      })

      

      // 动态设置遮罩层的marginTop为div的负高度
      // $('.zz').find('p').css('marginTop',($('.row').height())/2-50)
      //$('.zz').css('marginTop',-($('.row').height()))

      //鼠标移入的时候让遮罩层动画
      $('.mouseover').hover(function(){
        $(this).animate({borderRadius:50})
      },function(){
        $(this).animate({borderRadius:0})
      })

      $('.cepingzz').hover(function(){
        $(this).find('.zz').animate({opacity : 0.6});
        $(this).find('p').animate({lineHeight : $(this).height() + 'px'})
        $(this).find('p').html($(this).find('img').attr('title'))
      },function(){
        $(this).find('.zz').animate({opacity : 0});
        $(this).find('p').animate({lineHeight : 0})
        // $('.zz').find('p').css('marginTop',($('.cepingzz').height())/2)
      })


      //这是子页1上面的点击变化
      
      $('#left_top_top_btn>div').click(function(){
        // $('#left_top_bottom>div').eq($(this).index()).css
        $('#left_top_bottom>div').css("display","none");
        $('#left_top_bottom>div').eq($(this).index()).css("display","block");
      })
      $('#smallImg div img').click(function(){
        $('#bigImg img').attr("src",$(this).attr("src"))
      })

      // 这是special的效果
      $('.right').hover(function(){
            $(this).find('img').stop().animate({width : 120+'%',height:120+'%'},800)
            $(this).find('h1').stop().animate({opacity: 1},800)
      },function(){
            $(this).find('img').stop().animate({width : 100+'%',height:100+'%'},800)
            $(this).find('h1').stop().animate({opacity: 0},800)
      })

      var width = $('.container_bottom').find('div').outerWidth()
      var height = $('.container_bottom').find('div').outerHeight()



      $('.container_bottom').find('div').hover(function(ev){
            $(this).find('div').stop().animate({width:(width*2)/3,height:height/3,marginTop:width/3, opacity:1},700)
            
      },function(){
            $(this).find('div').stop().animate({width:width,height:height,marginTop:0,opacity:0},700)
      })

      // 加入心愿单的心形变化
      $('#right_middle p:nth-of-type(1)').click(function(){
        var old = $(this).find('span').attr('class');
        if(old == 'glyphicon glyphicon-heart'){
          old = 'glyphicon glyphicon-heart-empty'
        }else{
          old = 'glyphicon glyphicon-heart'
        }
        $(this).find('span').attr('class',old)
      })

      $('#right_middle p:nth-of-type(3)').click(function(){
        $('#right_middle p:nth-of-type(5) input').css("display","block");
        $('#right_middle p:nth-of-type(5) input').attr('value',window.location.href)
      })

     // accessories的文字变化
     var n = 0;
     setInterval(function(){
        $('#imgDiv').find('div').eq(n).animate({opacity: 0},2000)
        if( n == 3){
          n = 0
        }else{
          n = n + 1
        } 
        $('#imgDiv').find('div').eq(n).animate({opacity: 1},2000)
                 
     },5000)

      // 这是点击回到顶部
       $(window).scroll(function(){
            if($(window).scrollTop() > 150){
                $("#top").fadeIn(1000);//一秒渐入动画
            }else{
                $("#top").fadeOut(1000);//一秒渐隐动画
            }
        });

      $("#top").click(function () { 
        var speed = 1000;//滑动的速度
        $('html,body').animate({ scrollTop: 0 }, speed);//去顶部
        flag = true
      }); 

      function getCookie(key) {
        var arr1 = document.cookie.split('; ');
        for (var i=0; i<arr1.length; i++) {
          var arr2 = arr1[i].split('=');
          if (arr2[0]==key) {
            return arr2[1];
          }
        }
      }

      // 更新登录状态
      function updateStatus(){
        var uid = getCookie('uid')
        var username = getCookie('username')
        if(uid){
          $('.navbar-nav').find('li').eq(0).find('a').html(username)
          $('.navbar-nav').find('li').eq(1).find('a').html('退出')
          $('.navbar-nav').find('li').eq(1).find('a').click(function(){
              $.ajax({
                type:'get',
                url:'../guestbook/index.php',
                data:{
                  m:'index',
                  a:'logout'
                },
                success:function(data){
                  alert('退出成功')
                  location.reload() 
                }
              })
              return false
          })
        }
      }

      updateStatus()

      
})