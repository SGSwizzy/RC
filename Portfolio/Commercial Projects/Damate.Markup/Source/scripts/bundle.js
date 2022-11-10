
import { doc } from 'prettier';
import { addEvent } from './utils';
import './initTabs';
import './searchPanel';
import './carousel';
import Choices from 'choices.js';
import nouislider from 'noUiSlider';


let headerMenu = document.querySelector('.nav-panel');
let body = document.querySelector('body');

window.toggleMenu = function(isShow){
    headerMenu.classList.toggle('_open', isShow);
    body.classList.toggle('scroll', isShow)
}


addEvent(document, 'click','.header__hamburger', function() {
    toggleMenu(true);
})
addEvent(document, 'click','.nav-panel__close', function() {
    toggleMenu(false);
})

let filter = document.querySelector('.listing-filter');

window.filterToggle = function(isActive){
    filter.classList.toggle('show', isActive);
}

addEvent(document, 'click','.listing-panel__btn', function() {
    filterToggle(true);
})
addEvent(document, 'click','.listing-filter-head__close', function() {
    filterToggle(false);
})


window.initSelect = () => {
	const elements = document.querySelectorAll('.js-select');
	elements.forEach( el => {
		const select = new Choices(el, {
			searchEnabled: false,
			itemSelectText: '',
			classNames: {
				containerOuter: 'choices select-choices',
			},
		});
	})
}
initSelect();

window.initRangeSlider = () => {
    const element = document.querySelector('.js-range-slider');
    if(!element) {
        return;
    }
        nouislider.create(element, {
            start: [0, 40000],
            // snap: true,
            connect: true,
            range: {
                'min': 0,
                'max': 400000
            }
        });
    var snapValues = [
        document.getElementById('range-value-min'),
        document.getElementById('range-value-max')
    ];
    
    element.noUiSlider.on('update', function (values, handle) {
        snapValues[handle].innerHTML = Math.ceil(values[handle]) + ' ₽';
    });
}
initRangeSlider()

window.showFilterRange = function(){
    let filterRange = document.querySelector('.listing-filter__range');
    filterRange.classList.toggle('show');
}

addEvent(document, 'click','.listing-filter__item--price .listing-filter__panel', function() {
    showFilterRange();
})


// wheel scroll for tabs
const tabsScroll = () => {
    
    const tabs = document.querySelector('.tabs__controls');

    console.log(tabs)
    if(!tabs) {
        return;
    }

    tabs.addEventListener('wheel', function(event) {

    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });
}

tabsScroll();
