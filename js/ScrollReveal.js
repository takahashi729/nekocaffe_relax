// topページのネコ紹介のアニメーション

// 全体
ScrollReveal().reveal(".huwa", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
});
ScrollReveal().reveal(".huwa2", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 200, //どれくらい遅らせて表示させるか
});
ScrollReveal().reveal(".huwa3", {
  duration: 3000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 900, //どれくらい遅らせて表示させるか
});
ScrollReveal().reveal(".huwa4", {
  duration: 2700, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 400, //どれくらい遅らせて表示させるか
});

// topページのスマホサイズの時にPCのアニメーションをやめて、スリックに変更する
if (window.matchMedia("(max-width: 767px)").matches) {
  // ウィンドウサイズ768px以下のときの処理
  $(".slik").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  });
} else {
  document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal(".neko-hover", {
      delay: 200, // 表示の遅延を設定 (1つ目はすぐ表示)
      interval: 300, // 各要素が次々と表示される間隔
      distance: "50px", // 下から50pxの位置から表示
      duration: 1000, // アニメーションの時間
      easing: "ease-in-out", // アニメーションの動き
      origin: "bottom", // アニメーションの開始位置（下から）
    });
  });

  // それ以外の処理
  // 写真
  // ScrollReveal().reveal(".neko p:nth-child(1)", {
  //   duration: 2000, // アニメーションの完了にかかる時間
  //   viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  //   reset: false, // 何回もアニメーション表示するか
  //   delay: 200, //どれくらい遅らせて表示させるか
  // });
  // ScrollReveal().reveal(".neko p:nth-child(2)", {
  //   duration: 2000, // アニメーションの完了にかかる時間
  //   viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  //   reset: false, // 何回もアニメーション表示するか
  //   delay: 500, //どれくらい遅らせて表示させるか
  // });
  // ScrollReveal().reveal(".neko p:nth-child(3)", {
  //   duration: 2000, // アニメーションの完了にかかる時間
  //   viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  //   reset: false, // 何回もアニメーション表示するか
  //   delay: 800, //どれくらい遅らせて表示させるか
  // });
  // ScrollReveal().reveal(".neko p:nth-child(4)", {
  //   duration: 2000, // アニメーションの完了にかかる時間
  //   viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  //   reset: false, // 何回もアニメーション表示するか
  //   delay: 1200, //どれくらい遅らせて表示させるか
  // });
}

// ネコの紹介ページのアニメーション
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".f-picture", {
    delay: 200, // 表示の遅延を設定 (1つ目はすぐ表示)
    interval: 300, // 各要素が次々と表示される間隔
    distance: "50px", // 下から50pxの位置から表示
    duration: 1000, // アニメーションの時間
    easing: "ease-in-out", // アニメーションの動き
    origin: "bottom", // アニメーションの開始位置（下から）
  });
});
