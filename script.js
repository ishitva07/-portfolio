const text = "Ishitva Rathore";
const heroTitle = document.getElementById('heroTitle');
let i = 0;

function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  heroTitle.textContent = "";
  setTimeout(typeWriter, 500);
});
