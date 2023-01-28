let controls = Array.from(document.querySelectorAll(".control"));

controls.forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelector(".active-btn").classList.remove("active-btn");
    button.classList.add("active-btn");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(button.dataset.id).classList.add("active");
    document.title = document.title.replace(
      document.title,
      `Kavit Desai | ${button.dataset.id
        .charAt(0)
        .toUpperCase()}${button.dataset.id.slice(1)}`
    );
  });
});

document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
