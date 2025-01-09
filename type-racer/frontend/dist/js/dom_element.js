import card_data from './textData.js'

// badge Elements 
const badgeTrainEL = document.querySelector('.badgeTrain');
const badgeBotEL = document.querySelector('.badgeBot');
const badgeCustomEL = document.querySelector('.badgeCustom');

// card Elements 
const lunchDescriptionEl = document.querySelector('.lunchDescription')
const StartEl = document.querySelector('.start')
const titlesEl = document.querySelector('.lunchCard-titles')
const customBtnEl = document.querySelector('.lunchCard-btn')

// functions that filled the card 

const showTrainCard = () => {

    lunchDescriptionEl.innerHTML = card_data.text[2]
    StartEl.innerHTML = card_data.btnContent 
    titlesEl.innerHTML = card_data.titles[0]
    if (window.getComputedStyle(customBtnEl).display==='flex') {
        customBtnEl.style.display='none'
    } 
         
}
const showBotCard = () => {
    lunchDescriptionEl.innerHTML = card_data.text[1]
    StartEl.innerHTML = card_data.btnContent 
    titlesEl.innerHTML = card_data.titles[1]
    if (window.getComputedStyle(customBtnEl).display==='flex') {
        customBtnEl.style.display='none'
    } 
}
const showCustomCard = () => {
    lunchDescriptionEl.innerHTML = card_data.text[0]
    StartEl.innerHTML = card_data.btnContent 
    titlesEl.innerHTML = card_data.titles[2]
    


    if (window.getComputedStyle(customBtnEl).display==='none') {
        customBtnEl.style.display='flex'
    } 
        
    
}






// adding events to the dom elements

badgeTrainEL.addEventListener('click', showTrainCard);
badgeBotEL.addEventListener('click', showBotCard);
badgeCustomEL.addEventListener('click', showCustomCard);