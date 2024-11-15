//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var mainH = $('.g-nav-main').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= 550){
			$('.g-nav-main').addClass('fixed');
		}else{
			$('.g-nav-main').removeClass('fixed');
		}
}

$(window).scroll(function () {
	FixedAnime();
});

// ............................................................

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav-main").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav-main a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav-main").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// ................................................................

$('.slider').slick({
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	speed: 500,//スライドのスピード。初期値は300。
	slidesToShow: 3,//スライドを画面に3枚見せる
	slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	centerMode: true,//要素を中央ぞろえにする
	variableWidth: true,//幅の違う画像の高さを揃えて表示
	dots: true,//下部ドットナビゲーションの表示
});