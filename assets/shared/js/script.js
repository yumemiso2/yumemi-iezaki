const fadeInEffect = (entries, obs) => {
  entries.forEach((entry) => {
    // もし画面内に監視対象が入っているなら、
    if (entry.isIntersecting){
      entry.target.animate (
        {
          opacity: [0,1],
          filter: ["blur(.2rem)", "blur(0)"],
          translate:["0 40px", 0],
        },
        { delay: 400,
          duration: 1300,
          easing: "ease",
          fill: "forwards",
        }
      );
      obs.unobserve(entry.target);
    }
  });
}

// フェードインアニメーション
const fadeObserver = new IntersectionObserver(fadeInEffect);
const fadeInContents = document.querySelectorAll(".js-scrollfadein");

fadeInContents.forEach((fadeInContent) => {
  fadeObserver.observe(fadeInContent);
})
