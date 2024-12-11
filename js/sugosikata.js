// --------------------------------------------------------------------------------過ごし方アニメーション左右から表示--------------------------------------------------------------------------------
if (window.matchMedia("(max-width: 767px)").matches) {
  // ウィンドウサイズ768px以下のときの処理
  ScrollReveal().reveal(".slide-left", {
    origin: "left", // 左からスライド
    distance: "100px", // 左から100pxの距離を設定
    duration: 1500, // アニメーションの時間（1秒）
    easing: "ease-in-out", // スムーズな進行
    opacity: 0, // 透明度を0から1に変化させる
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 一度だけ表示する（リセットしない）
  });

  ScrollReveal().reveal(".slide-right", {
    origin: "right", // 右からスライド
    distance: "100px", // 右から100pxの距離を設定
    duration: 1500, // アニメーションの時間（1秒）
    easing: "ease-in-out", // スムーズな進行
    opacity: 0, // 透明度を0から1に変化させる
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 一度だけ表示する（リセットしない）
  });
} else {
  ScrollReveal().reveal(".slide-left-pc", {
    origin: "left", // 左からスライド
    distance: "100px", // 左から100pxの距離を設定
    duration: 1500, // アニメーションの時間（1秒）
    easing: "ease-in-out", // スムーズな進行
    opacity: 0, // 透明度を0から1に変化させる
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 一度だけ表示する（リセットしない）
  });

  ScrollReveal().reveal(".slide-right-pc", {
    origin: "right", // 右からスライド
    distance: "100px", // 右から100pxの距離を設定
    duration: 1500, // アニメーションの時間（1秒）
    easing: "ease-in-out", // スムーズな進行
    opacity: 0, // 透明度を0から1に変化させる
    viewFactor: 0.3, // 0~1,どれくらい見えたら実行するか
    reset: false, // 一度だけ表示する（リセットしない）
  });
}
// 下部コメント
ScrollReveal().reveal(".huwa2", {
  duration: 2000, // アニメーションの完了にかかる時間
  viewFactor: 0.5, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 200, //どれくらい遅らせて表示させるか
});
