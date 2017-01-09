
$(function () {
	$("[data-toggle='popover']").popover();

});
$(document).ready(function () {
	$("div").addClass("animated");
	$(".img-circle").addClass("flipInX");
	$(".quote").addClass("fadeInUp");
	$(".personnaldate").addClass("fadeInRight");
	$(".personnaldiscr").addClass("fadeInLeft");
	$(window).scroll(function(){
		scrollListen();
	});
	$(".top").click(function() {
    $("html,body").animate({scrollTop:0}, 1000);
    });
});
function scrollListen(){
	var scrollp = $("body").scrollTop();
	if (scrollp>50) {
		$(".skill1").addClass("rotateInDownLeft");
		$(".skill2").addClass("bounceIn");
		$(".skill3").addClass("rotateInDownRight");
		$(".skill4").addClass("rotateInUpLeft");
		$(".skill6").addClass("rotateInUpRight");
	}
	if (scrollp>893) {
		$(".work-exp-text").addClass("fadeInDown");
		$(".work-exp-pic").addClass("fadeIn");
		$(".work-exp-left").addClass("fadeInLeft");
		$(".work-exp-right").addClass("fadeInRight");
	}
	if (scrollp>1734) {
		$(".demos-text").addClass("fadeIn");
		$(".demo1").addClass("fadeInUp");
		$(".demo2").addClass("fadeInDown");
	}
	if (scrollp>2576) {
		$(".contact").addClass("slideInDown");
		$(".phone").addClass("bounceInRight");
		$(".email").addClass("bounceInLeft")
		$(".top").addClass("bounceInUp");
	}
}
