//ELは必須の設定
// swiper というクラス名がついているものを集める
const matches = document.querySelectorAll(".swiper");
console.log(matches);

// forEach = 数分を繰り返す
matches.forEach(matche => {
  console.log()
  // matche = .swiper という名前がついたものを、1つずつとみる
  console.log(matche)
  // matcheの中の、.swiper-button-nextという名前がついたものを1つずつみる（Allみたいに、配列にならない）
  console.log(matche.querySelector('.swiper-button-next'));

  const swiper = new Swiper(matche , {
    loop: false,//スライドを繰り返しする
    keyboard: {
      enabled: true,
    },

    navigation: {
      //
      nextEl: matche.querySelector('.swiper-button-next'),//次へボタン
      prevEl: matche.querySelector('.swiper-button-prev'),//前へボタン
    },


  // https://codesandbox.io/p/sandbox/vf5lq2?file=/index.html:52,1
    slidesPerView: "auto",//スライダーコンテナにスライドを-枚同時表示
    centeredSlides: true,//アクティブなスライドを中央に表示
    // spaceBetween: 40,//スライド間の距離
    pagination: {
      el: matche.parentNode.querySelector(".swiper-pagination"),//スライドの枚数と現在アクティブなスライドがわかる
      clickable: true,
    }
  });

} );


// const swiper = new Swiper('.swiper', {
//   loop: false,//スライドを繰り返しする
//   keyboard: {
//     enabled: true,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',//次へボタン
//     prevEl: '.swiper-button-prev',//前へボタン
//   },


// // https://codesandbox.io/p/sandbox/vf5lq2?file=/index.html:52,1
//   slidesPerView: "auto",//スライダーコンテナにスライドを-枚同時表示
//   centeredSlides: true,//アクティブなスライドを中央に表示
//   // spaceBetween: 40,//スライド間の距離
//   pagination: {
//     el: ".swiper-pagination",//スライドの枚数と現在アクティブなスライドがわかる
//     clickable: true,
//   }
// });
