var hnx = {};

(function(hnx, $) {
	'use strict';

	var initTooltips = function() {
		$('area').each(function(index, area) {
			$(area).qtip({
				style: 'red'
			});
		});
	};

	var initSmoothScrolling = function() {
		$('area, .nav a').on('click', function() {
			var targetId = $(this).attr('href');
			hnx.scrollTo(targetId, 2000);
			return false;
		});
	};

	hnx.init = function() {
		initTooltips();
		initSmoothScrolling();
	};
})(hnx, jQuery);
