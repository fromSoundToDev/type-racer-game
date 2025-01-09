import card_data from './textData.js';

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    // badge Elements 
    const badgeTrainEL = document.querySelector('.badgeTrain');
    const badgeBotEL = document.querySelector('.badgeBot');
    const badgeCustomEL = document.querySelector('.badgeCustom');

    // card Elements 
    const lunchDescriptionEl = document.querySelector('.lunchDescription');
    const titlesEl = document.querySelector('.lunchCard-titles');
    const customBtnEl = document.querySelector('.lunchCard-btn');
    const startBtnEl = document.getElementById('start');
    const lunchCardEl = document.querySelector('.lunchCard');
    const startNormalRaceEl = document.querySelector('.start-normal-race');
    const gameContainerEl = document.querySelector('.game-container')
    const startYouVsComputerEl = document.querySelector('.start-you-vs-computer');
    const startCustomRace = document.querySelector('.start-custom-race');

  

    // functions that fill the card
    const showTrainCard = () => {
        lunchDescriptionEl.innerHTML = card_data.text[2];
        startBtnEl.innerHTML = card_data.btnContent;
        titlesEl.innerHTML = card_data.titles[0];
        if (window.getComputedStyle(customBtnEl).display === 'flex') {
            customBtnEl.style.display = 'none';
        }

        if (!startBtnEl.classList.contains('start-normal-race')) {
            startBtnEl.classList.remove('start-you-vs-computer', 'start-custom-race');
            startBtnEl.classList.add('start-normal-race');
        }
    };

    const showBotCard = () => {
        lunchDescriptionEl.innerHTML = card_data.text[1];
        startBtnEl.innerHTML = card_data.btnContent;
        titlesEl.innerHTML = card_data.titles[1];
        if (window.getComputedStyle(customBtnEl).display === 'flex') {
            customBtnEl.style.display = 'none';
        }

        if (!startBtnEl.classList.contains('start-you-vs-computer')) {
            startBtnEl.classList.remove('start-normal-race', 'start-custom-race');
            startBtnEl.classList.add('start-you-vs-computer');
        }
    };

    const showCustomCard = () => {
        lunchDescriptionEl.innerHTML = card_data.text[0];
        startBtnEl.innerHTML = card_data.btnContent;
        titlesEl.innerHTML = card_data.titles[2];

        if (window.getComputedStyle(customBtnEl).display === 'none') {
            customBtnEl.style.display = 'flex';
        }
        if (!startBtnEl.classList.contains('start-custom-race')) {
            startBtnEl.classList.remove('start-normal-race', 'start-you-vs-computer');
            startBtnEl.classList.add('start-custom-race');
        }
    };

    const handleNormalRace = () => {
        if (window.getComputedStyle(lunchCardEl).display === 'flex'&& window.getComputedStyle(gameContainerEl).display==='none') {
            lunchCardEl.style.display = 'none';
            gameContainerEl.style.display = 'flex';

        }
    };

    // adding events to the dom elements
    badgeTrainEL.addEventListener('click', showTrainCard);
    badgeBotEL.addEventListener('click', showBotCard);
    badgeCustomEL.addEventListener('click', showCustomCard);
    startNormalRaceEl.addEventListener('click', handleNormalRace);
});
