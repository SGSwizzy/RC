import {addEvent} from './utils'

/**
 * Инициализирует табы
 */
window.initTabs = function (){
    addEvent(document, 'click', '.tabs__controls-item', function(e) {
        e.preventDefault();
        const activeTab = this;
        const tabsContainer = activeTab.closest('.tabs');
        const tabs = tabsContainer.querySelectorAll('.tabs__controls-item');
        const tabsContent = tabsContainer.querySelectorAll('.tabs__content');
        tabs.forEach((item, i) => {
            if (activeTab === item) {
                item.classList.add('tabs__controls-item--active');
                tabsContent[i].classList.add('tabs__content--active');
            } else {
                item.classList.remove('tabs__controls-item--active');
                tabsContent[i].classList.remove('tabs__content--active');
            }
        })
    })
}

initTabs();