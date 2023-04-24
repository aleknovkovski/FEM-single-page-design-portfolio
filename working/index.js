const portfolioSlider = document.querySelector('.portfolio-slider')

const prevSlide = document.querySelector('.prev-slide-btn')
const nextSlide = document.querySelector('.next-slide-btn')

prevSlide.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide')
    portfolioSlider.removeChild(slides[0])
    portfolioSlider.appendChild(slides[0])
})

nextSlide.addEventListener('click', () => {
    const slides = document.querySelectorAll('.slide')
    portfolioSlider.removeChild(slides[slides.length-1])
    portfolioSlider.insertBefore(slides[slides.length-1], portfolioSlider.firstChild, )
})