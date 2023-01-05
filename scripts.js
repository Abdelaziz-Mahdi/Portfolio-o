const menuBtn = document.getElementById('menu');
const closeMenu = document.getElementById('mMenu');
const menuCo = document.getElementById('mBody');
const mBtnHello = document.getElementById('mBtnHello');
const mBtnPortfolio = document.getElementById('mBtnPortfolio');
const mBtnAbout = document.getElementById('mBtnAbout');
const mBtnContact = document.getElementById('mBtnContact');
const bodyVis = document.getElementById('ani');

mBtnHello.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnPortfolio.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnAbout.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

mBtnContact.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
  bodyVis.style.position = 'static';
  bodyVis.style.overflow = 'auto';
});

menuBtn.addEventListener('click', () => {
  menuCo.style.display = 'block';
  bodyVis.style.position = 'sticky';
  bodyVis.style.overflow = 'hidden';
});




const mediaQuery = window.matchMedia('(min-width: 768px)');

function screenSize(i) {
  if (i.matches) {
    menuCo.style.display = 'none';
    bodyVis.style.position = 'static';
    bodyVis.style.overflow = 'auto';
  }
}
mediaQuery.addListener(screenSize);

/* Projects Details Array */

const projectsArray = [
  {
    id: 0,
    title: 'Project name goes here',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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


  
/* Works and popup section markup*/

const worksHtml = () => {
  const works = document.getElementById('works');
  works.innerHTML += `
  <div id="item1">
  <h2 class="worksHeader">Projects</h2>
  <div id="worksV1"></div>
  </div>`;
  projectsArray.forEach((work) => {
    const workCard = document.createElement('li');
    workCard.classList.add('project-card'+ work.id, 'pjc' );
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
          <button id="showDialog${work.id}" class="btn btnProj">
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
    </div>
    <dialog id="favDialog">
  <section class="flexCo">
    <header class="popHeader">
      <h4 class="">${work.title}</h4>
      <button id="closeModal" class="close-modal popClose" title="close" type="button"></button>
    </header>
    <ul class="poplangList">
      <li class="lang1">${work.technologies[0]}</li>
      <li class="lang2">${work.technologies[1]}</li>
      <li class="lang3">${work.technologies[2]}</li>
    </ul>
    <img id="popMainImage" src=${work.urlMainImg} alt="" />
    <div class="popImgContainer">
      <img class="popSecImage" src=${work.urlThumps1} alt="" />
      <img class="popSecImage" src=${work.urlThumps2} alt="" />
      <img class="popSecImage" src=${work.urlThumps3} alt="" />
      <img class="popSecImage" src=${work.urlThumps4} alt="" />
    </div>
  
    <p>${work.description}</p>
    <ul class="ulBTN">
      <li>
      <a class="btn btnProj seeLive" href="${work.live}">
          <div class="btnText">See Live</div>
          <div id="btnIcon">
            <img src="png/ic_link.svg" alt="" />
          </div>
        </a>
      </li>
      <li id="seeSourceLi">
        <a href="${work.source}" class="btn btnProj seeSource">
          <div class="btnText">See Source</div>
          <div id="btnIcon">
            <img src="png/ic_github_b.svg" alt="$" />
          </div>
        </a>
      </li>
    </ul>
    <ul class="ulNav">
      <li><i id="popNavArrowL"></i><a href="#">Previous project</a></li>
      <li id="ulNavLiR">
        <a id="ulNavLiRA" href="#">Next project</a><i id="popNavArrowR"></i>
      </li>
    </ul>
  </section>
  </dialog>`;
    works.appendChild(workCard);
  });
  works.innerHTML += `
    <div id="item4"></div>
    <div id="item7"></div>
    <div id="item8"></div>
    <div id="item9"></div>`
    ;
    const favDialog = document.querySelector('#favDialog');

    for (let i = 0; i < projectsArray.length; i += 1) {
      const showButton = document.querySelector(`#showDialog${projectsArray[i].id}`);
      showButton.addEventListener('click', () => {
        favDialog.showModal();
        bodyVis.style.position = 'sticky';
        bodyVis.style.overflow = 'hidden';
      }); }

    const closeButton = document.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
      favDialog.close();
      
      bodyVis.style.position = 'static';
      bodyVis.style.overflow = 'auto';
    });
};

window.onload = () => {
  worksHtml();
};
