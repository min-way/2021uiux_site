$(document).ready(function(){
  $(".slider").bxSlider({
    pager:false
  });
  // $('.owl-carousel').owlCarousel();
  const topPos = $(".gnb").offset().top;
  $(window).scroll(function(){
    let scrollY = $(window).scrollTop();
    if(topPos<scrollY){
      $(".headTop").addClass("fixed");
    }else{
      $(".headTop").removeClass("fixed");
    }
  });

  $(".conversion ul li").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
  });

  const topBtn = document.getElementsByClassName("topBtn")[0];
  topBtn.onclick = function(){
    // window.scrollTo(0,0);
    $("html,body").animate({scrollTop:0},700)
  }

// responsive 700 //


  $(".toggleMenu").click(function(){
    const check = $(".toggleMenu").attr("class");
    if(check=="toggleMenu"){
      $(this).addClass("on");
      $(".gnb").stop().animate({left:0},300);
    }else{
      $(this).removeClass("on");
      $(".gnb").stop().animate({left:"100%"},300);
    }
  });

  $(".gnb>li>a").click(function(){

  });

  $(".gnb>li").hover(function(){
      $(".headTop").stop().animate({height:320},100);
      $(".lnb").stop().slideDown().animate({},200);
  },function(){
      $(".headTop").stop().animate({height:120},100);
      $(".lnb").stop().slideUp().animate({},200);
  });

  $(window).resize(function(){
    console.log(window.innerWidth)
    if(window.innerWidth <= 700){
      //mobile

    }else{//PC
        $(".gnb>li").hover(function(){
            $(".headTop").stop().animate({height:320},100);
            $(".lnb").stop().slideDown().animate({},200);
        },function(){
            $(".headTop").stop().animate({height:120},100);
            $(".lnb").stop().slideUp().animate({},200);
        });
        $(".toggleMenu").removeClass("on");
        $(".gnb").stop().animate({left:"100%"},300);
      }

  });
});
