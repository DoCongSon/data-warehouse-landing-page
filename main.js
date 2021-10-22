function app() {
  var arrItem = document.querySelectorAll(".slides-item");
  var arrDot = document.querySelectorAll(".dot");
  var items = [...arrItem];
  var dots = [...arrDot];
  function scrollTo(item) {
    item.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function (e) {
      const dotIndex = Number(e.target.dataset.index);
      scrollTo(items[dotIndex]);
      dots.forEach((e) => {
        e.classList.remove("dot--active");
      });
      dot.classList.add("dot--active");
    });
  });
}
app();
