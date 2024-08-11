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
window.onload = () => {
  const ModalItemImageSwiper = new Swiper('.HomePracticeModalImg__swiper', {
    // loop: false,//スライドを繰り返しする
    loop: true,
    speed: 2000,  //スライド切り替えアニメーションのスピードを指定
    autoplay: {
      delay: 1000,  //次のスライドに切り替わるまでの時間
      disableOnInteraction: false,  // ユーザーがページを触っても自動再生を続行する
    },

    // https://codesandbox.io/p/sandbox/vf5lq2?file=/index.html:52,1
    // slidesPerView: "auto",//スライダーコンテナにスライドを-枚同時表示
    centeredSlides: true,//アクティブなスライドを中央に表示
    pagination: {
      el: ".HomePracticeModalImg__swiper-pagination",//スライドの枚数と現在アクティブなスライドがわかる
      // clickable: true,
    },
  });
  ModalItemImageSwiper.autoplay.stop();

  window.addEventListener("click", () => {
    const ModalImgMove = document.querySelector(".HomePracticeModalImg__swiperMove");
    if (ModalImgMove) {
      ModalImgMove.addEventListener("click", () => {
        ModalItemImageSwiper.autoplay.start();
      });
    } else {
      ModalItemImageSwiper.autoplay.stop();
    }
  });
  // const ModalImgMove = document.querySelector(".HomePracticeModalImg__swiperMove");
  // ModalImgMove.addEventListener("click", ModalItemImageSwiper.autoplay.start());

}



// addEventListener("load",() => {
//   const ModalImgMove = document.querySelector(".HomePracticeModalImg__swiperMove");
//   if(ModalImgMove.onload){
//     ModalItemImageSwiper.autoplay.start();
//   }
//   console.log(ModalImgMove);
//   // const HomePracticeModalImg__swiperMove =
// })

// ModalSwiper の初期化
const MicroModalSwiper = new Swiper('#HomePractice__swiper', {
  effect: "fade",
  autoHeight: false,
  navigation: {
    nextEl: "#HomePractice__swiper-button-next",
    prevEl: "#HomePractice__swiper-button-prev",
  },
  pagination: {
    // el: "#HomePractice__swiper-pagination",
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
      MicroModalSwiper.slideTo(i, 0);
    }
  );
});

// scrollListItemLink();
