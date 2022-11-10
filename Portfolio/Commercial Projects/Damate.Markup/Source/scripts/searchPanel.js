import {addEvent} from './utils'

let searchPanel = document.querySelector('.header-searchbar');
let searchPanelOpen = document.querySelector('.header-search__btn');
let searchPanelClose = document.querySelector('.header-searchbar__close');


window.togglePanel = function(isShow){
    searchPanel.classList.toggle('_open',isShow);
}

// searchPanelOpen.addEventListener('click', togglePanel(true));
// searchPanelClose.addEventListener('click', togglePanel(false));

addEvent(document, 'click','.header-search__btn', function() {
    togglePanel(true);
})
addEvent(document, 'click','.header-searchbar__close', function() {
    togglePanel(false);
})