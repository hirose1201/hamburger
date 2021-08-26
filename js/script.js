$(function(){

  console.log("表示されるかな");

  //メニューボタンをクリック→メニュー表示
  $(".c-button--hamburgermenu").on("click",function(){
    console.log("ハンバーガーメニューのテスト");
    if($(".l-sidebar").has("u-cancel")){
      //キャンセルボタンをクリックした後ならば
      $(".l-sidebar").addClass('u-active');
      $(".p-sidebar").addClass('u-active--opacity');
      $(".l-sidebar").removeClass('u-cancel');
      $(".p-sidebar").removeClass('u-cancel--opacity');
    } else {
      //初めてのクリックだったならば
      $(".l-sidebar").addClass('u-active');
      $(".p-sidebar").addClass('u-active--opacity');
    }
  }); 

  //キャンセルボタンをクリック→メニュー非表示
  $(".c-button--sidebar").on("click",function(){
    console.log("キャンセルボタンのテスト");

    if($(".l-sidebar").has("u-active")){
      //MENUボタンをクリックしたなら、キャンセルのクラスを与える
      $(".l-sidebar").addClass('u-cancel');
      $(".p-sidebar").addClass('u-cancel--opacity');
      $(".l-sidebar").removeClass('u-active');
      $(".p-sidebar").removeClass('u-active--opacity');
    } else {
      //そうでないなら
      $(".l-sidebar").addClass('u-cancel');
      $(".p-sidebar").addClass('u-cancel--opacity');
    }
  });

  //以下、ウィンドウ幅の測定---------------------------------------------
  var checkResize;
  $(window).on('load resize', function() {
    clearTimeout( checkResize );
    checkResize = setTimeout( resizing, 100 );

    //リサイズ完了時に実行する処理
    function resizing() {
      var w = $(window).width();

      //ウィンドウサイズが1023より大きい場合の処理
      if( w > 1023 ) {
        console.log('ウィンドウサイズは1023より大きいです。');
        $(".p-sidebar").css('transition','none'); 

      //ウィンドウサイズが1022以下の場合の処理
      } else {
        console.log('ウィンドウサイズは1022以下です。');
        $(".p-sidebar").css('transition','opacity .6s ease , visibility .6s ease'); 
      
      }; //1022以下の処理ココまで
    }; //ウィンドウ幅による処理ココまで
  }); //ウィンドウ幅の測定ココまで


});