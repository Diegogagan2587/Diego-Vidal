function displayMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top-dropMobile';
}

function exitMobileMenu() {
  document.getElementById('nav-list-top').className = 'nav-list-top';
}

function openPopUp() {
  document.getElementById('portfolio-pupUp-background').className = 'portfolio-pupUp-backgroundOpen';
}

function exitPopUp() {
  document.getElementById('portfolio-pupUp-background').className = 'portfolio-pupUp-backgroundClose';
  document.getElementById('portfolio-pupUp-background').querySelector('.technology-tags').innerHTML = null;
}

// heper functiosn upwards;
const exit = document.getElementById('exit');
const navListAnchors = document.getElementById('nav-list-top').querySelectorAll('a');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const portfolioPopUpCloseBtn = document.getElementById('portfolioPopUpCloseBtn');

// add event listeners;
hamburgerBtn.addEventListener('click', displayMobileMenu);
portfolioPopUpCloseBtn.addEventListener('click', exitPopUp);

exit.addEventListener('click', exitMobileMenu);
for (let i = 0; i < navListAnchors.length; i += 1) {
  navListAnchors[i].addEventListener('click', exitMobileMenu);
}

// ------------------Start Work Section and cards --------------------------------------------//
function JobCardData(
  name,
  description,
  img,
  technologies,
  liveVersion,
  source,
  descriptionDesk,
  imgDesk,
  imgPopMobile,
) {
  this.name = name;
  this.description = description;
  this.img = img;
  this.technologies = technologies;
  this.liveVersion = liveVersion;
  this.source = source;
  this.descriptionDesk = descriptionDesk;
  this.imgDesk = imgDesk;
  this.imgPopMobile = imgPopMobile;
}

const jobCards = [
  new JobCardData(
    'Creative Developers',
    'A joyful celebration believing in the value of learning to code,',
    './img/projects/capstone-projeect-1.png',
    ['HTML', 'CSS', 'Javascript'],
    'https://diegogagan2587.github.io/Capstone-project-module-1/',
    'https://github.com/Diegogagan2587/Capstone-project-module-1',
    'The Creative Developers Summit is a gathering that embraces emerging software developers, focusing on the theme of persistence. This annual event aims to foster collaboration and knowledge sharing among developers interested in building robust and reliable software solutions. Attendees include enthusiasts from various domains such as database management, cloud computing, and data storage. Together, we explore innovative techniques, discuss best practices, and envision a future where persistence plays a crucial role in shaping the digital landscape. Join us to contribute and learn at this dynamic summit!',
    './img/projects/capstone-projeect-1-desktop-popup.png',
    './img/projects/capstone-projeect-1.png',
  ),
  new JobCardData(
    'Today\'s To Do',
    'To-Do list is a simple project to keep track of the daily activities',
    './img/projects/capstone-projeect-2.png',
    ['HTML', 'CSS', 'Javascript'],
    'https://diegogagan2587.github.io/To-Do-List/dist/index.html',
    'https://github.com/Diegogagan2587/To-Do-List',
    'To-Do list is a simple project to keep track of the daily activities, You can add, delete or mark as completed your tasks! Close the browser and retrieve your task later!',
    './img/projects/capstone-projeect-2-desktop-popup.png',
    './img/projects/capstone-projeect-2.png',
  ),
  new JobCardData(
    'Facebook 360',
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    './img/Snapshoot Portfolioproject-screenshot.svg',
    ['HTML', 'CSS', 'JavaScript'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    './img/desktop/Preview-desktopxx.png',
    './img/pop-up-mobile.png',

  ),
  new JobCardData(
    'Uber Navigation',
    ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    './img/Snapshoot Portfolio2.svg',
    ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    'https://diegogagan2587.github.io/Diego-Vidal',
    'https://github.com/Diegogagan2587/Diego-Vidal',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    './img/desktop/Preview-desktopxx.png',
    './img/pop-up-mobile.png',
  ),
];

// first get a template for cards
const jobCardTemplate = document.getElementById('card-element');

function getNewCardFrom(obj) {
  // first we copy the template
  const newCardFromTemplate = jobCardTemplate.cloneNode(true);
  // then we modife the content;
  // name
  newCardFromTemplate.querySelector('.project-name').innerText = `${obj.name}`;
  // description
  newCardFromTemplate.querySelector('.card-main-text').innerText = `${obj.description}`;
  // img
  newCardFromTemplate.querySelector('img').src = `${obj.img}`;
  // tech
  const tagsContainer = newCardFromTemplate.querySelector('.technology-tags');
  for (let ind = 0; ind < obj.technologies.length; ind += 1) {
    const newList = document.createElement('li');
    newList.innerText = `${obj.technologies[ind]}`;
    tagsContainer.appendChild(newList);
  }

  return newCardFromTemplate;
}

// then we append a card for each obj within the arr;
const cardsContainer = document.querySelector('.cards-container');
for (let i = 0; i < jobCards.length; i += 1) { // index is 1 because the element 0 is the template
  const tempCard = getNewCardFrom(jobCards[i]);
  if (i % 2 !== 0) {
    // add class reverse
    tempCard.setAttribute('class', 'card-element card-reverse');
  }
  tempCard.querySelector('button').setAttribute('value', `${i}`);
  cardsContainer.appendChild(tempCard);
}

// ------------------Start Pop-up fuction --------------------------------------------//
function setPopUpData(e) {
  const popUpContainer = document.querySelector('.porfolio_pop-up_main-container');
  const dataIndex = e.srcElement.value;
  // name
  popUpContainer.querySelector('h2').innerText = `${jobCards[dataIndex].name}`;
  // img and description
  if (window.innerWidth >= 768) {
    popUpContainer.querySelector('p').innerText = `${jobCards[dataIndex].descriptionDesk}`;
    popUpContainer.querySelector('.preview').src = `${jobCards[dataIndex].imgDesk}`;
  } else {
    popUpContainer.querySelector('p').innerText = `${jobCards[dataIndex].description}`;
    popUpContainer.querySelector('.preview').src = `${jobCards[dataIndex].img}`;
  }
  // tech
  const tagsContainer = popUpContainer.querySelector('.technology-tags');

  for (let i = 0; i < jobCards[dataIndex].technologies.length; i += 1) {
    const newListElement = document.createElement('li');
    newListElement.innerText = `${jobCards[dataIndex].technologies[i]}`;
    tagsContainer.appendChild(newListElement);
  }

  // live version
  document.querySelector('#see-live').querySelector('a').href = `${jobCards[dataIndex].liveVersion}`;
  // link source
  document.querySelector('#see-source').querySelector('a').href = `${jobCards[dataIndex].source}`;
}
// ------------------end Pop-up fuction --------------------------------------------//

// now we add event listeners to see project
const seeProjectButton = document.querySelectorAll('.See-project-button');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', setPopUpData);
  element.addEventListener('click', openPopUp);
});

// -------Start Section Form Validations-----------------//
// variables
const contactForm = document.getElementById('contac-form');
const submitBtn = contactForm.querySelector('#get-in-touch');
const spanError = document.querySelector('.error');
// functions

function validationForm(event) {
  let result;
  const text = contactForm.email.value;
  if (text === text.toLowerCase()) {
    spanError.textContent = null;
    result = true;
  } else {
    spanError.textContent = 'Email must to be in lower case';
    result = false;
    event.preventDefault();
  }
  return result;
}

// events listeners

submitBtn.addEventListener('click', validationForm);

// -------Start Section Form Validations-----------------//

// -------Start Local Storage Section ------------------//

// Const

const formName = contactForm.querySelector('#name');
const formEmail = contactForm.querySelector('#email-input');
const formMsg = contactForm.querySelector('#user-message');

// create an object to save data from form;
const formData = {
  name: '',
  email: '',
  message: '',
};
// first we check if available localStorage, need to create a function to do so

function displayFromLocalStorage() {
  document.querySelector('#name').value = formData.name;
  document.querySelector('#email-input').value = formData.email;
  document.querySelector('#user-message').value = formData.message;
}

function getFromLocalStorage() {
  const currentData = localStorage.getItem('formData');
  const getFormData = JSON.parse(currentData);
  formData.name = getFormData.name;
  formData.email = getFormData.email;
  formData.message = getFormData.message;
  displayFromLocalStorage();
}

function saveInLocalStorage() {
  localStorage.setItem('formData', JSON.stringify(formData));
  getFromLocalStorage();
}

function saveFromInput() {
  formData.name = formName.value;
  formData.email = formEmail.value;
  formData.message = formMsg.value;
  saveInLocalStorage();
}

function validateLocalStorage() {
  if (!localStorage.getItem('formData')) {
    saveFromInput();
  } else {
    getFromLocalStorage();
  }
}

validateLocalStorage();

formName.onkeydown = saveFromInput;
formEmail.onkeydown = saveFromInput;
formMsg.onkeydown = saveFromInput;

// -------End Local Storage Section ------------------//
