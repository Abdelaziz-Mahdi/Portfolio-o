// eslint-disable-next-line  no-unused-vars
function openMenu() {
  document.getElementById("ani").style.marginLeft = "100%";
  window.location.href = "menu.html";
}

// eslint-disable-next-line  no-unused-vars
function headding() {
  window.location.href = "index.html";
}

// eslint-disable-next-line  no-unused-vars
function worksSection() {
  window.location.href = "index.html#works";
}

// eslint-disable-next-line  no-unused-vars
function aboutSection() {
  window.location.href = "index.html#aboutMyself";
}

// eslint-disable-next-line  no-unused-vars
function footerSection() {
  window.location.href = "index.html#footerV";
}

const mediaQuery = window.matchMedia("(min-width: 768px)");

function screenSize(i) {
  if (i.matches) {
    headding();
  }
}
mediaQuery.addListener(screenSize);
