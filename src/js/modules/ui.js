export function initAnimations(scrollTween) {
  // 1. Hero Title Animation
  gsap.to(".title-anim", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#section-1",
      start: "top 60%",
    },
  });

  // 2. Grid Animation (แก้ไข: เอา Opacity ออกเพื่อให้เห็นจุดแน่นอน)
  ScrollTrigger.matchMedia({
    // Desktop
    "(min-width: 1024px)": function () {
      if (scrollTween) {
        gsap.from(".week-dot", {
          scale: 0.5, // ลดขนาดเริ่มเล็กน้อย (ไม่เอา 0 เดี๋ยวหาย)
          // opacity: 0, <--- ❌ ลบบรรทัดนี้ทิ้งเลยครับ ตัวปัญหา
          duration: 0.2,
          stagger: { amount: 1.0, grid: "auto", from: "start" },
          scrollTrigger: {
            trigger: "#section-2",
            containerAnimation: scrollTween,
            start: "left 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    // Mobile
    "(max-width: 1023px)": function () {
      gsap.from(".week-dot", {
        scale: 0.5,
        // opacity: 0, <--- ❌ ลบบรรทัดนี้ทิ้งเช่นกัน
        duration: 0.5,
        stagger: { amount: 0.5, grid: "auto", from: "start" },
        scrollTrigger: {
          trigger: "#section-2",
          start: "top 80%",
        },
      });
    },
  });

  // 3. Parallax Effects
  const sections = document.querySelectorAll(".panel");
  sections.forEach((section) => {
    const parallaxElements = section.querySelectorAll("[data-speed]");
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed"));
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          gsap.to(el, {
            x: () => (1 - speed) * 100,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          });
        },
        "(max-width: 1023px)": function () {
          gsap.to(el, {
            y: speed * 30,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      });
    });
  });

  // 4. Marquee
  gsap.to(".marquee", {
    xPercent: -50,
    repeat: -1,
    duration: 10,
    ease: "linear",
  });

  // 5. Card Hover
  if (window.matchMedia("(hover: hover)").matches) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, zIndex: 50 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, zIndex: 10 });
      });
    });
  }
}
