export function initGrid() {
  const gridContainer = document.getElementById("weeks-grid");

  if (!gridContainer) {
    console.error("❌ Element 'weeks-grid' not found.");
    return;
  }

  // สร้างจุดตัวอย่างประมาณ 15 ปี
  const totalDots = 52 * 15;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("week-dot");

    if (i < 52 * 3) {
      dot.classList.add("active");
      dot.style.opacity = Math.random() * 0.3 + 0.7;
    }

    fragment.appendChild(dot);
  }

  gridContainer.appendChild(fragment);
  console.log(`✅ Generated ${totalDots} weeks.`);
}
