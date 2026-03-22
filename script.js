// TYPING EFFECT
const text = "Ishitva Rathore";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;

    if(top > offset){
      sec.classList.add("show");
    }
  });
});
