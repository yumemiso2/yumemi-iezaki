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
    // el: "#HomePractice__swiper-pagination",
    clickable: true,
  },
});



// MicroModalの初期化
MicroModal.init({disableScroll: true});

// feat: サムネイルとモーダルのスライドの表示が対応するようになった！！（これから、最適な書き方に改良予定）
// const scrollListItemLinkFirst = document.querySelector(".js-modal0");
// const scrollListItemLinkSecond = document.querySelector(".js-modal1");
// const scrollListItemLinkThird = document.querySelector(".js-modal2");
// console.log(scrollListItemLinkFirst);

// scrollListItemLinkFirst.addEventListener(
//   "click",
//   function(){
//     MicroModalSwiper.slideTo(0);
//     console.log("れんしゅうコンテンツ1")
//   },
//  );
// scrollListItemLinkSecond.addEventListener(
//   "click",
//   function(){
//     MicroModalSwiper.slideTo(1);
//     console.log("れんしゅうコンテンツ2")
//   },
//  );
// scrollListItemLinkThird.addEventListener(
//   "click",
//   function(){
//     MicroModalSwiper.slideTo(2);
//     console.log("れんしゅうコンテンツ3")
//   },
//  );

// 最適な書き方に改良する
const scrollListItemLinkFirst = document.querySelector(".js-modal0");

const scrollListItemLink = document.querySelectorAll(".js-modal");
// console.log(scrollListItemLinkFirst);
console.log(scrollListItemLink);

// console.log(scrollListItemLink);

// forEach は scrollListItemLink の中身を一個づつ取り出す処理
scrollListItemLink.forEach(function(link, i){
  // console.log(a, i);
  console.log(i + ' 回目の処理', link, scrollListItemLink[i]);
  // 1回目のループ scrollListItemLink[0].addEventListener
  // 2回目のループ scrollListItemLink[1].addEventListener
  // 3回目のループ scrollListItemLink[2].addEventListener
  // 以降 1 づつ増える
  // console.log(scrollListItemLink[i]);

  link.addEventListener(
    "click",
    function(){
      console.log(i + " をクリックした!!");
      MicroModalSwiper.slideTo(i, 0);
    }
  );
});


// scrollListItemLink[0].addEventListener(
//   "click",
//   function(){
//     console.log("1 をクリックした!!");
//   }
// );

// scrollListItemLink[1].addEventListener(
//   "click",
//   function(){
//     console.log("1 をクリックした!!");
//   }
// );

// scrollListItemLink[2].addEventListener(
//   "click",
//   function(){
//     console.log("1 をクリックした!!");
//   }
// );
