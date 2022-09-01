"use strict";

// menu toggle

// selecting elements
const menu = document.getElementById("menu");
const list = document.getElementById("list");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

// opening menu functionalty
const menuOpener = () => {
  list.classList.remove("close");
  list.classList.add("open");
  overlay.style.display = "block";
  body.style.touchAction = "none";
};

// closing menu functionalty
const menuCloser = () => {
  list.classList.remove("open");
  list.classList.add("close");
  overlay.classList.remove("open");
  overlay.style.display = "none";

  body.style.touchAction = "auto";
};

// on click menu
menu.addEventListener("click", () => {
  if (list.classList.contains("close")) {
    menuOpener();
  } else {
    menuCloser();
  }
});

//on click overlay
overlay.addEventListener("click", () => {
  menuCloser();
});
