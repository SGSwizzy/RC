const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

// Второй способ

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}