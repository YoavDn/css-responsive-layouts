"use strict ";

const elShopBtn = document.querySelector("button");
const elSideBar = document.querySelector(".side-bar");

elShopBtn.addEventListener("click", () => {
  elSideBar.classList.toggle("open-side-bar");
  console.log(elSideBar);
});
