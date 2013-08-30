(function(hnx, $, Modernizr) {
	var sliding = false;

	function slideTo(target, duration) {
		var to = isNaN(target) ? $(target).offset().top : target;
		var from = $(window).scrollTop();
		var dy = to - from;
		var body = $("body");

		if (sliding) {
			$(window).scrollTop(to);
		} else {
			body.css({
				y: dy
			});
			$(window).scrollTop(to);
			body.transition({
				y: 0,
				duration: duration,
				complete: function() {
					body.css("transition", "none");
					sliding = false;
				}
			});
			sliding = true;
		}
	}

	hnx.scrollTo = function(target, duration) {
		duration = isNaN(duration) ? 500 : duration;

		if (Modernizr.csstransitions && Modernizr.csstransforms) {
			slideTo(target, duration);
		} else {
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, duration);
		}

		// history.pushState({}, "", href);
	};
})(hnx, jQuery, Modernizr);