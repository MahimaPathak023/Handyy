
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});
    

const scroll = (() => {
  let v = 0, i = 0;
  const images = document.querySelector('.pagediv');
  const top = images.getBoundingClientRect().top;
  const img = document.querySelectorAll('.pages');
  const cls = document.body.classList;
  const len = img.length, max = len - 1;

  return (dy, step = 1) => {
    if (images.getBoundingClientRect().top - top)
      return;
    v = Math.min(Math.max(v += Math.sign(dy) * step, 0), len * 100);
    (i = (v - v % 100) / 100) === 0 && (v = 100);
    let o = v - i * 100;
    i > max ? (i = max, o = 100, cls.remove('fixed')) : cls.add('fixed');
    for (let n = img.length; n--;)
      img[n].style.opacity = `${n === i ? o : n < i ? 100 : 0}%`;
  };
})();

scroll(0);
window.addEventListener('wheel', e => scroll(e.deltaY, 1), true);



