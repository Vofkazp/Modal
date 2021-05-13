const modal = document.querySelector(".modal"),
  opn = document.querySelector(".open"),
  cls = document.querySelector(".close");

opn.addEventListener("click", () => {
  modal.classList.add('open');
});

cls.addEventListener("click", () => {
    modal.classList.remove('open');
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove('open');
  }
});
