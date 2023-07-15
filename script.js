document.querySelector("[name='overview']").addEventListener('click', tabSelector);
document.querySelector("[name='tickets']").addEventListener('click', tabSelector);

let cardContent = ['All tickets', 'My tickets', 'Open', 'Pending', 'Solved', 'Closed', 'Spam'];

function elementCreator(array, place, text) {
  for (let i = 0; i < array.length; i++) {
    const container = document.querySelector(place); 
    const containerCard = document.createElement('div');
    const cardTitle = document.createElement('p');
    cardTitle.innerText = array[i];
    containerCard.appendChild(cardTitle);
    container.appendChild(containerCard);
    if (text !== undefined) {
      const cardText = document.createElement('p');
      cardText.innerText = text[i];
      containerCard.appendChild(cardText);
    }
  }
} 

elementCreator(cardContent, '.sideMenu');

function tabSelector() {
  if (this.getAttribute('name') === 'overview') {
    this.classList.add('selectedTab');
    document.querySelector("[name='tickets']").classList.remove('selectedTab');
    overviewContent();
  } else if (this.getAttribute('name') === 'tickets') {
    this.classList.add('selectedTab');
    document.querySelector("[name='overview']").classList.remove('selectedTab');
    ticketContent();
  }
}

function ticketContent() {
  document.querySelector('.sideMenu').display = 'flex';
  const mainMenu = document.querySelector('.mainMenu');
  mainMenu.style.gridColumn = '3 / 4';
}

function overviewContent() {
  // hide side menu
  document.querySelector('.sideMenu').display = 'none';
  const mainMenu = document.querySelector('.mainMenu');
  mainMenu.innerHTML = '';
  mainMenu.style.gridColumn = '2 / 4';
  // create info cards
  let infoCardContainer = document.createElement('div');
  infoCardContainer.classList.add('infoCardContainer');
  const infoCardNames = ['Open', 'Solved', 'Pending', 'Closed'];
  const infoCardStats = ['23', '45', '12', '51'];
  mainMenu.appendChild(infoCardContainer);
  elementCreator(infoCardNames, '.infoCardContainer', infoCardStats);
  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menuTitle');
  menuTitle.innerText = 'Overview';
  mainMenu.appendChild(menuTitle);
}
