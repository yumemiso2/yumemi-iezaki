// const scrollCount = window.scrollY;
// const scrollFadein = document.querySelectorAll(".js-scrollfadein");

// const fadeInEffect = (entries, obs) => {
//   entries.forEach((entry) => {
//     // もし画面内に監視対象が入っているなら、
//     if (entry.isIntersecting){
//       // console.log(entry.target);
//       entry.target.animate (
//         {
//           opacity: [0,1],
//           filter: ["blur(.4rem)", "blur(0)"],
//           translate:["0 4rem", 0],
//         },
//         {
//           duration: 2000,
//           easing: "ease",
//           fill: "forwards",
//         }
//       );
//       obs.unobserve(entry.target);
//     }
//   });
//   console.log("ふわり");
// }

const fadeInEffect = (entries, obs) => {
  entries.forEach((entry) => {
    // もし画面内に監視対象が入っているなら、
    if (entry.isIntersecting){
      // console.log(entry.target);
      entry.target.animate (
        {
          opacity: [0,1],
          filter: ["blur(.2rem)", "blur(0)"],
          translate:["0 2rem", 0],
        },
        {
          duration: 1500,
          easing: "ease",
          fill: "forwards",
        }
      );
      obs.unobserve(entry.target);
    }
  });
  console.log("ふわり");
}

const fadeObserver = new IntersectionObserver(fadeInEffect);
const fadeInContents = document.querySelectorAll(".js-scrollfadein");
// console.log(fadeInContents);

fadeInContents.forEach((fadeInContent) => {
  fadeObserver.observe(fadeInContent);
})
