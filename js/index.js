//ELは必須の設定

const swiper = new Swiper('#HomeWorks__swiper', {
  loop: false,//スライドを繰り返しする
  autoHeight: true,
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
  loop: true,
  pagination: {
    el: "#HomeWorks__swiper-pagination",//スライドの枚数と現在アクティブなスライドがわかる
    clickable: true,
  }
});

// ModalItemImageSwiper　の初期化をする（モーダル内で複数回使うので、クラス名を使用する）
const modalImgList = document.querySelectorAll(".HomePracticeModalImg__swiper");
const modalImgSwiper = [];

modalImgList.forEach((modalImg, i) => {
  modalImgSwiper[i] = new Swiper(modalImg, {
    loop: true,
    speed: 2000,//スライド切り替えアニメーションのスピードを指定
    autoplay: {
      disableOnInteraction: false,  // ユーザーがページを触っても自動再生を続行する
    },
    centeredSlides: true,//アクティブなスライドを中央に表示
    pagination: {
      clickable: true,
      el: modalImg.querySelector(".HomePracticeModalImg__swiper-pagination"),  //スライドの枚数と現在アクティブなスライドがわかる
    },
  });
});

// ModalSwiper の初期化
const MicroModalSwiper = new Swiper('#HomePractice__swiper', {
  effect: "fade",
  autoHeight: true,
  navigation: {
    nextEl: "#HomePractice__swiper-button-next",
    prevEl: "#HomePractice__swiper-button-prev",
  },
  pagination: {
    clickable: true,
  },
});


// MicroModalの初期化
MicroModal.init({ disableScroll: true });


// クリックしたれんしゅう作品のサムネイルと、モーダルのスライドページが対応するようにした
const scrollListItemLink = document.querySelectorAll(".js-modal");


// モーダルのインデックスを切り替える
// forEach は scrollListItemLink の中身を一個づつ取り出す処理
scrollListItemLink.forEach(function (link, i) {
  // console.log(i + ' 回目の処理', link, scrollListItemLink[i]);
  link.addEventListener(
    "click",
    function () {
      // console.log(i + " をクリックした!!");
      MicroModalSwiper.update();
      MicroModalSwiper.slideTo(i, 0);


      modalImgSwiper.forEach(swiper => {
        swiper.slideTo(0, 0); // スライドを1枚目に戻す
        swiper.autoplay.start(); // 再生を開始する
      });
    }
  );
});
