import card_data from './textData.js'

// badge Elements 
const badgeTrainEL = document.querySelector('.badgeTrain');
const badgeBotEL = document.querySelector('.badgeBot');
const badgeCustomEL = document.querySelector('.badgeCustom');

// card Elements 
const lunchDescriptionEl = document.querySelector('.lunchDescription')
const StartEl = document.querySelector('.start')

// functions that filled the card 

const showTrainCard = () => {

    lunchDescriptionEl.innerHTML = card_data.text[0]
    StartEl.innerHTML = card_data.btnContent 
         
}
const showBotCard = () => {

}
const showCustomCard = () => {

}






// adding events to the dom elements

badgeTrainEL.addEventListner('click', showTrainCard);
badgeBotEL.addEventListener('click', showBotCard);
badgeCustomEL.addEventListener('click', showCustomCard);