function slide() {
  const slide = document.querySelector(".slides");
  const nextArrow = document.querySelector(".slides-arrow--next");
  const prevArrow = document.querySelector(".slides-arrow--prev");
  const arrItem = document.querySelectorAll(".slides-item");
  const arrDot = document.querySelectorAll(".dot");
  const item = [...arrItem];
  const dots = [...arrDot];
  const gapLength = 38;
  const itemLength = item[0].offsetWidth + gapLength;
  console.log("🚀 ~ file: main.js ~ line 11 ~ slide ~ itemLength", itemLength);
  const slideLength = itemLength * item.length;
  var index = 0;
  var translateX = 0;
  function activeDot(index) {
    dots.forEach(function (dot) {
      dot.classList.remove("dot--active");
    });
    dots[index].classList.add("dot--active");
  }
  dots.forEach(function (dot) {
    dot.addEventListener("click", function (e) {
      index = e.target.dataset.index;
      translateX = -index * itemLength;
      slide.style.transform = `translateX(${translateX}px)`;
      activeDot(index);
    });
  });
  prevArrow.addEventListener("click", function (e) {
    handlePrevSlide();
  });
  nextArrow.addEventListener("click", function (e) {
    handleNextSlide();
  });
  function handleNextSlide() {
    if (index >= item.length - 1) {
      index = 0;
      translateX = 0;
      slide.style.transform = `translateX(${translateX}px)`;
      console.log(index);
      activeDot(index);
      return;
    }
    index++;
    translateX -= itemLength;
    slide.style.transform = `translateX(${translateX}px)`;
    console.log(index);
    activeDot(index);
  }
  function handlePrevSlide() {
    if (index <= 0) {
      index = item.length - 1;
      translateX = -slideLength + itemLength;
      slide.style.transform = `translateX(${translateX}px)`;
      console.log(index);
      activeDot(index);
      return;
    }
    index--;
    translateX += itemLength;
    slide.style.transform = `translateX(${translateX}px)`;
    console.log(index);
    activeDot(index);
  }
}
slide();
