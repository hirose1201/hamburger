$(function(){

  console.log("表示されるかな");

  //メニューボタンをクリック→メニュー表示
  $(".c-hamburger__button").on("click",function(){
    console.log("ハンバーガーメニューのテスト");
    if($(".l-sidebar").has("c-cancel")){
      //キャンセルボタンをクリックした後ならば
      $(".l-sidebar").addClass('c-active');
      $(".l-sidebar").removeClass('c-cancel');
    } else {
      //初めてのクリックだったならば
      $(".l-sidebar").addClass('c-active');
    }
  }); 

  //キャンセルボタンをクリック→メニュー非表示
  $(".c-sidebar__button").on("click",function(){
    console.log("キャンセルボタンのテスト");

    if($(".l-sidebar").has("c-active")){
      //MENUボタンをクリックしたなら、キャンセルのクラスを与える
      $(".l-sidebar").addClass('c-cancel');
      $(".l-sidebar").removeClass('c-active');
    } else {
      //そうでないなら
      $(".l-sidebar").addClass('c-cancel');
    }
  });
});