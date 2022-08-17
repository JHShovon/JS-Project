const sliderSlide = document.querySelectorAll(".single-slide");

console.log(sliderSlide);

let countSlider = 1;

setInterval(() => {
  countSlider++;
  const activeSlide = document.querySelector(".active");

  activeSlide.classList.remove("active");

  if (countSlider > sliderSlide.length) {
    sliderSlide[0].classList.add("active");
    countSlider = 1;
  } else {
    activeSlide.nextElementSibling.classList.add("active");
  }
}, 3000);
