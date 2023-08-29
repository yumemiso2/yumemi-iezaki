//ELは必須の設定

const swiper = new Swiper('.swiper', {
  loop: false,//スライドを繰り返しする

  navigation: {
    nextEl: '.swiper-button-next',//次へボタン
    prevEl: '.swiper-button-prev',//前へボタン
  },


// https://codesandbox.io/p/sandbox/vf5lq2?file=/index.html:52,1
  slidesPerView: "auto",//スライダーコンテナにスライドを-枚同時表示
  centeredSlides: true,//アクティブなスライドを中央に表示
  // spaceBetween: 40,//スライド間の距離
  pagination: {
    el: ".swiper-pagination",//スライドの枚数と現在アクティブなスライドがわかる
    clickable: true,
  }
});


// swiper のスライドをキーボードで操作する
swiper.keyboard.enable();   // ←これを追加

// let previndex = swiper.activeIndex;
// // swiper の最後のスライドのインデックスを取得する
// const lastIndex = swiper.slides.length - 1;

// swiper.on('keyPress', function (_, keyCode) {
//   // アクティブなスライドが最後のスライドだったら
//   if (previndex === lastIndex && keyCode === 39) {
//     // 最初のスライドに戻る
//     swiper.slideTo(0);
//   }

//   previndex = swiper.activeIndex;
// } );
