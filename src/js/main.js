import { initGrid } from "./modules/grid.js";
import { initScroll } from "./modules/scroll.js";
import { initAnimations } from "./modules/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  initGrid();
  const scrollTween = initScroll();

  setTimeout(() => {
    initAnimations(scrollTween);
    ScrollTrigger.refresh();
  }, 100);

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
});
