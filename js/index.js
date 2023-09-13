//ELは必須の設定

const swiper = new Swiper('#swiper1', {
  loop: false,//スライドを繰り返しする
  keyboard: {
    enabled: true,
  },

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




// ModalSwiper の初期化
const MicroModalSwiper = new Swiper('#swiper2',{
  // spaceBetween: 20,
  effect: "fade",
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// MicroModalの初期化
MicroModal.init();
