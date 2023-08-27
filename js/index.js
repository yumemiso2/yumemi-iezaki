//ELは必須の設定

const swiper = new Swiper('.swiper', {
  loop: false,//スライドを繰り返しする

  navigation: {
    nextEl: '.swiper-button-next',//次へボタン
    prevEl: '.swiper-button-prev',//前へボタン
  },

  scrollbar: {
    el: '.swiper-scrollbar',//スクロールバー
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
