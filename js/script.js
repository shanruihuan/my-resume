

//$(document).ready(function () {
//	$("div").addClass("animated");
//	$(".img-circle").addClass("flipInX");
//	$(".quote").addClass("fadeInUp");
//	$(".personnaldate").addClass("fadeInRight");
//	$(".personnaldiscr").addClass("fadeInLeft");
//	$(window).scroll(function(){
//		scrollListen();
//	});
//	$(".top").click(function() {
//    $("html,body").animate({scrollTop:0}, 1000);
//    });
//});
//function scrollListen(){
//	var scrollp = $("body").scrollTop();
//	if (scrollp>50) {
//		$(".skill1").addClass("rotateInDownLeft");
//		$(".skill2").addClass("bounceIn");
//		$(".skill3").addClass("rotateInDownRight");
//		$(".skill4").addClass("rotateInUpLeft");
//		$(".skill6").addClass("rotateInUpRight");
//	}
//	if (scrollp>893) {
//		$(".work-exp-text").addClass("fadeInDown");
//		$(".work-exp-pic").addClass("fadeIn");
//		$(".work-exp-left").addClass("fadeInLeft");
//		$(".work-exp-right").addClass("fadeInRight");
//	}
//	if (scrollp>1734) {
//		$(".demos-text").addClass("fadeIn");
//		$(".demo1").addClass("fadeInUp");
//		$(".demo2").addClass("fadeInDown");
//	}
//	if (scrollp>2576) {
//		$(".contact").addClass("slideInDown");
//		$(".phone").addClass("bounceInRight");
//		$(".email").addClass("bounceInLeft")
//		$(".top").addClass("bounceInUp");
//	}
//}
//fullpage
$(function(){
          $('#fullpage').fullpage({
              anchors: ['page1', 'page2', 'page3', 'page4'],
              menu: '#navbar-menu',//固定nav
              css3: true,
              afterLoad: function(anchorLink, index){
              	if (index == 1) {
	              	$("div").addClass("animated");
					$(".img-circle").addClass("fadeInUp");
					$(".quote").addClass("fadeInUp");
					$(".personnaldate").addClass("fadeInRight");
					$(".personnaldiscr").addClass("fadeInLeft");
				}
                if(index == 2){
                  	$(".skill1").addClass("rotateInDownLeft");
					$(".skill2").addClass("bounceIn");
					$(".skill3").addClass("rotateInDownRight");
					$(".skill4").addClass("rotateInUpLeft");
					$(".skill6").addClass("rotateInUpRight");
                }
                if(index == 3){
                  	$(".work-exp-text").addClass("fadeInDown");
					$(".work-exp-pic").addClass("fadeIn");
					$(".work-exp-left").addClass("fadeInLeft");
					$(".work-exp-right").addClass("fadeInRight");
                }
                if(index == 4){
                  	$(".demos-text").addClass("fadeIn op");
					$(".demo1").addClass("fadeInUp");
					$(".demo2").addClass("fadeInDown");
                }
                if (index == 5) {
                	$(".contact").addClass("slideInDown op");
					$(".phone").addClass("bounceInRight op");
					$(".email").addClass("bounceInLeft op");
					$(".top").addClass("bounceInUpo op");
					$(".top").find("a").css("color","white")
                }
              }

          });
          $(window).resize(function(){
              autoScrolling();
          });

          function autoScrolling(){
              var $ww = $(window).width();
              if($ww < 950){
                  $.fn.fullpage.setAutoScrolling(false);
              } else {
                  $.fn.fullpage.setAutoScrolling(true);
              }
          }//响应式

          autoScrolling();

      });