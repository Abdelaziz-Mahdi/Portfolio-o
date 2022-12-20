function openMenu() {
  document.getElementById('ani').style.marginLeft = '100%';
  window.location.href = 'menu.html';
}

function headding() {
  window.location.href = 'index.html';
}

function worksSection() {
  window.location.href = 'index.html#works';
}

function aboutSection() {
  window.location.href = 'index.html#aboutMyself';
}

function footerSection() {
  window.location.href = 'index.html#footerV';
}

const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenSize(i) {
  if (i.matches) {
    headding();
  }
}
mediaQuery.addListener(screenSize);
