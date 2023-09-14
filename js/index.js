//ELは必須の設定

const swiper = new Swiper('#HomeWorks__swiper', {
  loop: false,//スライドを繰り返しする
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '#HomeWorks__swiper-button-next',//次へボタン
    prevEl: '#HomeWorks__swiper-button-prev',//前へボタン
  },


// https://codesandbox.io/p/sandbox/vf5lq2?file=/index.html:52,1
  slidesPerView: "auto",//スライダーコンテナにスライドを-枚同時表示
  centeredSlides: true,//アクティブなスライドを中央に表示
  // spaceBetween: 40,//スライド間の距離
  pagination: {
    el: "#HomeWorks__swiper-pagination",//スライドの枚数と現在アクティブなスライドがわかる
    clickable: true,
  }
});




// ModalSwiper の初期化
const MicroModalSwiper = new Swiper('#HomePractice__swiper',{
  effect: "fade",
  autoHeight: true,
  navigation: {
    nextEl: "#HomePractice__swiper-button-next",
    prevEl: "#HomePractice__swiper-button-prev",
  },
  pagination: {
    el: "#HomePractice__swiper-pagination",
    clickable: true,
  },
});



// MicroModalの初期化
MicroModal.init();
