var hnx = {};

(function(hnx, $) {
	'use strict';

	var initTooltips = function() {
		$('area').each(function(index, area) {
			$(area).qtip({
				style: {
					classes: 'qtip-red qtip-rounded qtip-big'
				},
				position: {
					my: 'top left',
					at: 'top right'
				}
			});
		});
	};

	var initSmoothScrolling = function() {
		$('area, .nav a, .home').on('click', function() {
			var targetId = $(this).attr('href');
			hnx.scrollTo(targetId, 2000);
			return false;
		});
	};

	var initLift = function() {
		if (window.location.hash && window.location.hash != '#start') {
			$('.lift').show();
		}

		var getNearestTarget = function() {
			var scrollPosition = $('body').scrollTop();
			var nearestTarget = null;
			var nearestTargetDistance = null;
			$('.lift-target').each(function(index, targetElement) {
				var distance = Math.abs(scrollPosition - $(targetElement).offset()['top']);
				if (nearestTarget == null || distance < nearestTargetDistance) {
					nearestTarget = $(targetElement);
					nearestTargetDistance = distance;
				}
			});

			return nearestTarget;
		};

		$('.lift .up').on('click', function() {
			var nearestTarget = getNearestTarget();
			var targetUp = nearestTarget.prev();
			if (targetUp.length > 0) {
				hnx.scrollTo('#' + targetUp.attr('id'), 2000);
			}
		});

		$('.lift .down').on('click', function() {
			var nearestTarget = getNearestTarget();
			var targetDown = nearestTarget.next();
			if (targetDown.length > 0) {
				hnx.scrollTo('#' + targetDown.attr('id'), 2000);
			}
		});
	};

	var initResponsiveImageMaps = function() {
		$('img[usemap]').rwdImageMaps();
	};

	hnx.init = function() {
		initTooltips();
		initLift();
		initSmoothScrolling();
		initResponsiveImageMaps();
	};
})(hnx, jQuery);
