// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // 左からふわっ（１列目）
  $('.fadeInLeftTrigger-1').each(function(){ //fadeInLeftTrigger-1というクラス名が
    var elemPos = $(this).offset().top-10;//要素より、10px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
    }
    });

  // 右からふわっ（２列目）
  $('.fadeInRightTrigger-2').each(function(){ //fadeInRightTrigger-2というクラス名が
    var elemPos = $(this).offset().top-10;//要素より、10px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');// 画面内に入ったらfadeLeftというクラス名を追記
    }else{
    $(this).removeClass('fadeRight');// 画面外に出たらfadeLeftというクラス名を外す
    }
    });

    // 左からふわっ（３列目）
  $('.fadeInLeftTrigger-3').each(function(){ //fadeInLeftTrigger-3というクラス名が
    var elemPos = $(this).offset().top-10;//要素より、10px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
    }
    });
}


// 画面をスクロールしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述