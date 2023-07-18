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

function onPageLoad() {
  // display info cards
  const mainMenu = document.querySelector('.mainMenu');
  mainMenu.style.gridColumn = '2 / 4';
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
  // display stat cards
  const callStatsChart = document.createElement('img');
  callStatsChart.src = './assets/magicpattern-svg-chart-1689455742060.svg';
  const callStatsContainer = document.createElement('div');
  callStatsContainer.classList.add('callStatsContainer');
  callStatsName = ['Inbound', 'Outbound', 'AHT', 'CSAT'];
  callStatsText = ['38', '12', '6min', '4.89'];
  mainMenu.append(callStatsChart);
  mainMenu.appendChild(callStatsContainer);
  elementCreator(callStatsName, '.callStatsContainer', callStatsText);
  // display announcements
  const announcementsContainer = document.createElement('div');
  announcementsContainer.classList.add('announcements');
  mainMenu.appendChild(announcementsContainer);
  announceName = ['Site Maintenance', 'New Changes', 'Updated Policy'];
  announceText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...',
                  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
                  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...'];
  elementCreator(announceName, '.announcements', announceText);
}

onPageLoad();