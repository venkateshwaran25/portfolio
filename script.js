// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const text = "VENKATESHWARAN C";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();
// Animate when scrolled into view
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fill").forEach(el => {
    el.style.width = el.dataset.width;
  });
});

