// ハンバーガーメニュー

$(".openbtn").click(function () {
	$(this).toggleClass('active');
	$("#g-nav").toggleClass('panelactive');
	$(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
	$(".openbtn").removeClass('active');
	$("#g-nav").removeClass('panelactive');
	$(".circle-bg").removeClass('circleactive');
});

// ..............................................


// section-good

//上部画像の設定
$('.good-gallery').slick({
	infinite: true, 
	fade: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
});

//選択画像の設定
$('.good-choice-btn').slick({
	infinite: true,
	slidesToShow: 3,
	focusOnSelect: true,
	asNavFor: '.good-gallery',
});

//下の選択画像をスライドさせずに連動して変更させる設定。
$('.good-gallery').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	var index = nextSlide;
	$(".good-choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});

// ..........................................

// top-image-slick

$(function () {
	$(".top-image-slick").slick({
		dots: true,
		autoplay: true,
		prevArrow: false,
		nextArrow: false
	});
});

// ...........................................


//pagetop-btn
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200) {
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	} else {
		if ($('#page-top').hasClass('UpMove')) {
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();
});

// ......................................

