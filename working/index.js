const portfolioSlider = document.querySelector('.portfolio-slider')

const data = [
    {id: 1, src: './assets/image-slide-1.jpg'},
    {id: 2, src: './assets/image-slide-2.jpg'},
    {id: 3, src: './assets/image-slide-3.jpg'},
    {id: 4, src: './assets/image-slide-4.jpg'},
    {id: 5, src: './assets/image-slide-5.jpg'}
]

function renderSlides() {
    data.forEach((slide) => {
        const newSlide = document.createElement('img')
        newSlide.setAttribute('class', 'slide')
        newSlide.setAttribute('src', slide.src)
        portfolioSlider.appendChild(newSlide)
    })
}

renderSlides()

let position = "center"

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