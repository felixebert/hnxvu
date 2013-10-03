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
		$('area, .scrolling-menu a, .home').on('click', function() {
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
			var scrollPosition = $(window).scrollTop();
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
			if (targetUp.length > 0 && targetUp.attr('id')) {
				hnx.scrollTo('#' + targetUp.attr('id'), 2000);
			} else {
				hnx.scrollTo('#start', 2000);
			}
		});

		$('.lift .down').on('click', function() {
			var nearestTarget = getNearestTarget();
			var targetDown = nearestTarget.next();
			if (targetDown.length > 0 && targetDown.attr('id')) {
				hnx.scrollTo('#' + targetDown.attr('id'), 2000);
			}
		});

		$('#start').on('inview', function(event, isInView) {
			if (isInView) {
				$('.lift').hide();
			}
		});
		$('.articles').on('inview', function(event, isInView) {
			if (isInView) {
				$('.lift').show();
			}
		});
	};

	var initResponsiveImageMaps = function() {
		$('img[usemap]').rwdImageMaps();
	};

	var initKanalModals = function() {
		var onClick = function() {
			var target = $(this).attr('href');
			var placeholder = $(target).find('.modal-placeholder');
			if (placeholder.length > 0) {
				hnx.replacePlaceholder(placeholder);
			}
			$(target).modal('show');
			return false;
		};
		$('#kanal area').on('click', onClick);
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

	hnx.replacePlaceholder = function(element) {
		var html = "";
		if ($(element).hasClass('vimeo-placeholder')) {
			html = '<iframe src="http://player.vimeo.com/video/' + $(element).data('video')
					+ '" allowFullScreen="true" height="421" width="750" class="responsive-iframe"></iframe>';
		} else if ($(element).hasClass('popcorn-placeholder')) {
			html = '<iframe src="https://popcorn.webmadecontent.org/' + $(element).data('id')
					+ '" width="750" height="421" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen class="responsive-iframe"></iframe>';
		} else if ($(element).hasClass('prezi-placeholder')) {
			html = '<iframe src="http://prezi.com/embed/'
					+ $(element).data('id')
					+ '/?bgcolor=ffffff&amp;lock_to_path=0&amp;autoplay=0&amp;autohide_ctrls=0&amp;features=undefined&amp;disabled_features=undefined" width="750" height="421" frameBorder="0" class="responsive-iframe"></iframe>';
		} else if ($(element).hasClass('storify-placeholder')) {
			html = '<iframe src="http://storify.com/' + $(element).data('id') + '.html" width="100%" height="600px"></iframe>';
		}
		$(element).after(html);
		$(element).off('inview');
		$(element).remove();
	};
	var initLazyLoading = function() {
		var replacePlaceholder = function(event, isInView) {
			if (isInView && !hnx.isScrolling) {
				hnx.replacePlaceholder($(this));
			}
		};
		$('.placeholder').on('inview', replacePlaceholder);
	};

	hnx.init = function() {
		initTooltips();
		initLift();
		initSmoothScrolling();
		initResponsiveImageMaps();
		initGrabModals();
		initKanalModals();
		initLazyLoading();
	};

	hnx.isScrolling = false;
	hnx.scrollTo = function(target, duration) {
		duration = isNaN(duration) ? 500 : duration;

		if (!hnx.isScrolling) {
			hnx.isScrolling = true;
			$('body,html,document').animate({
				scrollTop: $(target).offset().top
			}, duration, function() {
				hnx.isScrolling = false;
				if ($(target).find('.placeholder').length > 0) {
					hnx.replacePlaceholder($(target).find('.placeholder'));
				}
			});

			if (Modernizr.history) {
				history.pushState({}, "", target);
			}
		}
	};
})(hnx, jQuery);
