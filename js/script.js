// //  Aパターン開始
// // .hmenuをクリックした時
$(".hmenu").click(function () {
  //   // →navにスライドトグル
  //   // フワッと出てくるやつもできる
  $("nav").fadeToggle(500);
  //   // →$(this)にクラスcloseをトグル
  $(this).toggleClass("close");
});
// /* Aパターンここまで */
