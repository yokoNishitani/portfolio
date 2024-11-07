$(function() {
	// ハンバーガーメニュー
	$("#btn__hbg-menu").click(function () {
		$(this).toggleClass('active');
		$("#header__g-nav").toggleClass('panelactive');
	});

	$("#header__g-nav a").click(function () {
		$("#btn__hbg-menu").removeClass('active');
		$("#header__g-nav").removeClass('panelactive');
	});

	//...........................................................


	// works-fadein
	function delayScrollAnime() {
		var time = 0.5;
		var value = time;
		$('.works__ul').each(function () {
			var parent = this;
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var childs = $(this).children();

			if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
				$(childs).each(function () {

					if (!$(this).hasClass("fadeUp")) {

						$(parent).addClass("play");
						$(this).css("animation-delay", value + "s");
						$(this).addClass("fadeUp");
						value = value + time;

						var index = $(childs).index(this);
						if ((childs.length - 1) == index) {
							$(parent).removeClass("play");
						}
					}
				})
			} else {
				$(childs).removeClass("fadeUp");
				value = time;
			}
		})
	}

	$(window).scroll(function () {
		delayScrollAnime();
	});
	// ...........................................................

	$(window).on('load', function () {
		$("#loading__wrap--logo").delay(1500).fadeOut('slow');
		$("#loading__logo").delay(1200).fadeOut('slow');
	});

	var bar = new ProgressBar.Line(loading__countUp, {
		strokeWidth: 0,
		duration: 1000,
		trailWidth: 0,
		text: {
			style: {
				position: 'absolute',
				left: '50%',
				top: '65%',
				padding: '0',
				margin: '0',
				transform: 'translate(-50%,-50%)',
				'font-size': '1.2rem',
				'font-family': 'atrament-web, sans-serif',
				color: '#d1af10'
			},
			autoStyleContainer: false
		},
		step: function (state, bar) {
			bar.setText(Math.round(bar.value() * 100) + ' %');
		}
	});

	//アニメーションスタート
	bar.animate(1.0, function () {
		$("#loading__wrap").delay(500).fadeOut(800);
	});
});
