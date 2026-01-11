export function initScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  let scrollTween = null;

  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
      const sections = gsap.utils.toArray(".panel");
      const container = document.querySelector(".horizontal-container");

      scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + container.offsetWidth,
        },
      });
    },
    "(max-width: 1023px)": function () {
      if (scrollTween) {
        scrollTween.kill();
        scrollTween = null;
      }
    },
  });

  return scrollTween;
}
