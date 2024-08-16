// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".top-p");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// pagetopbtn

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200) {//200pxスクロールしたら
    $('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
    $('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
  } else {//それ以外は
    if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名が既に付与されていたら
      $('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
      $('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
    }
  }

  var wH = window.innerHeight; //画面の高さを取得
  var footerPos = $('#footer').offset().top; //footerの位置を取得
  if (scroll + wH >= (footerPos + 10)) {
    var pos = (scroll + wH) - footerPos + 10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $('#page-top').css('bottom', pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  } else {//それ以外は
    if ($('#page-top').hasClass('UpMove')) {//UpMoveというクラス名がついていたら
      $('#page-top').css('bottom', '10px');// 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});




// pagetopbtn-fin.

// feature ふわっと

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
      // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');
      // 画面外に出たらfadeInというクラス名を外す
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function () { //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');
      // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
  });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// featureふわっと終わり

// アコーディオンとslick

$(function () {
  $(".inner1").click(function () {
    $(".inner5").slideToggle();
  });

  $(".inner2").click(function () {
    $(".inner6").slideToggle();
  });

  $(".inner3").click(function () {
    $(".inner7").slideToggle();
  });

  $(".inner4").click(function () {
    $(".inner8").slideToggle();
  });

  $("#slick").slick({
    dots: true,
    autoplay: true
  });

  $('#slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  });

});

// 


// 追従

//画面が読み込まれたら＆リサイズされたら
$(window).on('load resize', function () {
  var windowWidth = window.innerWidth;
  var elements = $('nav');//position: sticky;を指定している要素
  if (windowWidth >= 768) {/*768px以上にIE用のJSをきかせる*/
    Stickyfill.add(elements);
  } else {
    Stickyfill.remove(elements);
  }
});

//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
$('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 0;
  $('body,html').animate({ scrollTop: pos }, 1000);
  return false;
});

// 


$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


