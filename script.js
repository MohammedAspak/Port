// 3D tilt effect
const tiltElements = document.querySelectorAll("[data-tilt]");
tiltElements.forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "rotateX(0) rotateY(0)";
  });
});

// footer year
document.getElementById("year").textContent = new Date().getFullYear();
