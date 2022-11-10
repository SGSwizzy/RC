/**
 * Добавляет кастомный обработчик событий
 * @param parent
 * @param evt
 * @param selector
 * @param handler
 */
function addEvent(parent, evt, selector, handler) {
    parent.addEventListener(evt, function(event) {
        if (event.target.matches(selector + ', ' + selector + ' *')) {
            handler.apply(event.target.closest(selector), arguments);
        }
    }, false);
}

/**
 * Добавляет обработчик на Escape
 * @param handler
 */
const addEscEvent = function(handler) {
    document.body.addEventListener('keyup', function (e){
        const key = e.key;
        if(key === 'Escape') {
            handler();
        }
    }, false)
}

/**
 * Считает ширину скроллбара браузера в пикселях
 * @returns {number}
 */
const getScrollbarWidth = function () {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;

}

export {addEvent, addEscEvent, getScrollbarWidth};