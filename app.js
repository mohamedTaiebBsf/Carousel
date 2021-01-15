const prev = document.getElementById("prev");
const next = document.getElementById("next");
const images = [...document.getElementsByTagName("img")];
const dots = [...document.querySelectorAll(".dot")];
let position = 0;

prev.addEventListener("click", () => {
  updateCarousel(() => updateImages("prev"));
});

next.addEventListener("click", () => {
  updateCarousel(() => updateImages("next"));
});

function updateCarousel(callback) {
  images[position].classList.remove("active");
  dots[position].classList.remove("dot-active");
  callback();
  images[position].classList.add("active");
  dots[position].classList.add("dot-active");
}

function updateImages(direction) {
  switch (direction) {
    case "next":
      if (position == images.length - 1) {
        position = 0;
      } else position++;
      break;

    case "prev":
      if (position == 0) {
        position = images.length - 1;
      } else position--;
      break;
  }
}

/* Dots Click */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateCarousel(() => {
      position = index;
    });
  });
});
