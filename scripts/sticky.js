$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 600) {
			$("body").addClass("header-fixed");
		} else {
			$("body").removeClass("header-fixed");
		}
	});
});
