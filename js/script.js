// ハンバーガーメニュー
$(".openbtn").click(function () {
	$(this).toggleClass('active');
	$(".g-nav").toggleClass('panelactive');
});

$(".g-nav a").click(function () {
	$(".openbtn").removeClass('active');
	$(".g-nav").removeClass('panelactive');
});

//...........................................................


// works-fadein
function delayScrollAnime() {
	var time = 0.5;//遅延時間を増やす秒数の値
	var value = time;
	$('.works-ul').each(function () {
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

// 画面をスクロールをしたら動かしたい場合
$(window).scroll(function () {
	delayScrollAnime();
});
// ...........................................................


//logo-splash
$(window).on('load', function () {
	$("#splash").delay(1500).fadeOut('slow');
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// ............................................................

//テキストのカウントアップ-splash
var bar = new ProgressBar.Line(splash_text, {
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
	$(".splash-wrap").delay(500).fadeOut(800);
});

// ............................................................
