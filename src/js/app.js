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

	var initGrabModals = function() {
		var onClick = function() {
			var target = $(this).attr('href');
			$(target).modal('show');

			var html = null;
			if (target == '#urneModal') {
				html = '<iframe src="//infogr.am/Trend-zur-Feuerbestattung" width="550" height="1163" scrolling="no" frameborder="0" style="border:none;"></iframe><div style="width:550px;border-top:1px solid #acacac;padding-top:3px;font-family:Arial;font-size:10px;text-align:center;"><a target="_blank" href="http://infogr.am/Trend-zur-Feuerbestattung" style="color:#acacac;text-decoration:none;">Trend zur Feuerbestattung</a> | <a style="color:#acacac;text-decoration:none;" href="http://infogr.am" target="_blank">Infographics</a></div>';
			}
			if (target == '#kreuzModal') {
				html = '<iframe width="100%" height="450px" style="max-height:100%;" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps/ms?msid=211773603488375674917.0004db6b44168f38fae8d&amp;msa=0&amp;hl=de&amp;ie=UTF8&amp;t=m&amp;ll=49.155215,9.18457&amp;spn=0.157176,0.291824&amp;z=11&amp;output=embed"></iframe>';
			}
			if (html) {
				$(target + ' .modal-body').html(html);
			}
			return false;
		};
		$('#grab area').on('click', onClick);
	};

	hnx.init = function() {
		initTooltips();
		initLift();
		initSmoothScrolling();
		initResponsiveImageMaps();
		initGrabModals();
	};
})(hnx, jQuery);
