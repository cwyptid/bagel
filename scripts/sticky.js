$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop) {
			$("body").addClass("header-fixed");
		} else {
			$("body").removeClass("header-fixed");
		}
	});
});
