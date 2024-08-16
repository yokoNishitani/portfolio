//ハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
    var headerH = $('#header').outerHeight();
    var scroll = $(window).scrollTop();
    if ((scroll >= headerH)&&(window.matchMedia('(min-width:701px)').matches)) {
        $('.openbtn').addClass('fadeDown');
        $('#header').addClass('dnone');
    } else {
        $('.openbtn').removeClass('fadeDown');
        $('#header').removeClass('dnone');
    }
    if ((scroll >= 0)&&(window.matchMedia('(max-width:700px)').matches)) {
        $('.openbtn').addClass('fadeDown');
        $('#header').addClass('dnone');
    }
    
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime();
});

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#header").toggleClass('panelactive');
});
$(".gnavi li a").click(function () {
    $(".openbtn").removeClass('active');
    $("#header").removeClass('panelactive');
});

$(window).scroll(function () {
    PageTopAnime();
});

$('#page-top-btn a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});


//ページトップボタン

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 885) {
        $('#page-top-btn').removeClass('DownMove');
        $('#page-top-btn').addClass('UpMove');
    } else {
        if ($('#page-top-btn').hasClass('UpMove')) {
            $('#page-top-btn').removeClass('UpMove');
            $('#page-top-btn').addClass('DownMove');
        }
    }
}

$(function () {
    const pageTop = $("#page-top-btn");
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            500
        );
        return false;
    });
});

// ゆっくりスクロール
// #page-link
$('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({ scrollTop: pos }, 500);
    return false;
});

// .footer-title
$('.footer-title').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// #page-top
$('.page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// .current
$('.current').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// .twitter-logo
$('.twitter-logo').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// .insta-logo
$('.insta-logo').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// .fb-logo
$('.fb-logo').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// ゆっくりスクロールfin.
