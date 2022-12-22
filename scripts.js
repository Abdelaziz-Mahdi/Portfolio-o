const menuBtn = document.getElementById('menu');
const closeMenu = document.getElementById('mMenu');
const menuCo = document.getElementById('mBody');
const mBtnHello = document.getElementById('mBtnHello');
const mBtnPortfolio = document.getElementById('mBtnPortfolio');
const mBtnAbout = document.getElementById('mBtnAbout');
const mBtnContact = document.getElementById('mBtnContact');

mBtnHello.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnPortfolio.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnAbout.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

mBtnContact.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  menuCo.style.display = 'block';
});

const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenSize(i) {
  if (i.matches) {
    menuCo.style.display = 'none';
  }
}
mediaQuery.addListener(screenSize);

/* Projects Details Array */
const projectsArray = [
  {
    id: 0,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle1.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle2.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle3.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle4.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle5.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  },{
    id: 1,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle2.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle3.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle4.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle5.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle6.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  },{
    id: 2,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle3.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle4.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle5.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle6.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle1.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  },{
    id: 3,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle4.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle5.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle6.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle1.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle2.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  },{
    id: 4,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle5.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle6.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle1.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle2.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle3.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  },{
    id: 5,
    title: 'Project name goes here',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    urlMainImg: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle6.png',
    urlThumps1: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle1.png',
    urlThumps2: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle2.png',
    urlThumps3: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle3.png',
    urlThumps4: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/Rectangle4.png',
    urlArrow: 'https://raw.githubusercontent.com/Abdelaziz-Ali/Portfolio/main/png/ArrowR.png',
    alt: 'laptop-human-hands',
    altArrow: 'arrow-icon',
    live: 'https://abdelaziz-ali.github.io/Portfolio/',
    source: 'https://github.com/Abdelaziz-Ali',
  }
];

/* Works section markup*/

const worksHtml = () => {
  const works = document.getElementById('works');
  works.innerHTML += `<div id="item1">
  <h2 class="worksHeader">Projects</h2>
  <div id="worksV1"></div>
  </div>`;
  projectsArray.forEach((work) => {
    const workCard = document.createElement('li');
    workCard.classList.add('project-card'+ work.id);
    workCard.innerHTML += `
      <div id="item2" class="firstProj">
      <div class="imgContainer">
        <img
        src=${work.urlMainImg}
        alt=${work.alt}
        />
      </div>
      <div class="infoBox">
        <div class="projInfo">
          <h3>${work.title}</h3>
          <ul class="langList">
            <li class="lang1">${work.technologies[0]}</li>
            <li class="lang2">${work.technologies[1]}</li>
            <li class="lang3">${work.technologies[2]}</li>
          </ul>
          <button class="btn btnProj">
            <div class="btnText">See this project</div>
            <div class="btnIcon">
               <img
              src=${work.urlArrow}
              alt=${work.altArrow}
              />
            </div>
          </button>
        </div>
      </div>
    </div>`;
    works.appendChild(workCard);
  });
  works.innerHTML += `
    <div id="item4"></div>
    <div id="item7"></div>
    <div id="item8"></div>
    <div id="item9"></div>`;
};

window.onload = () => {
  worksHtml();
};