let circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", function (e) {
    let target = e.currentTarget;
    target.classList.add("on");
  });
});
