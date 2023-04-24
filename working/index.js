const portfolioSlider = document.querySelector('.portfolio-slider')
let animating = false

const data = [
    {id: 1, src: './assets/image-slide-1.jpg', transform: 0},
    {id: 2, src: './assets/image-slide-2.jpg', transform: 0},
    {id: 3, src: './assets/image-slide-3.jpg', transform: 0},
    {id: 4, src: './assets/image-slide-4.jpg', transform: 0},
    {id: 5, src: './assets/image-slide-5.jpg', transform: 0},
]

function addSlide(slide) {
    const newSlide = document.createElement('img')
    newSlide.setAttribute('class', 'slide')
    newSlide.setAttribute('src', slide.src)
    portfolioSlider.appendChild(newSlide)
}

function addSlides(){
    portfolioSlider.textContent = ''
    addSlide(data[data.length-1])
    data.forEach((slide) => {
        addSlide(slide)
    })
    addSlide(data[0])
}

function renderSlides(move, speed) {
    animating = true
    const speedInSec = (speed/1000).toFixed(2)
    if(!move) {
        addSlides()
        animating = false
    }

    if(move === 'left') {
        const newRight = data.shift()
        data.push(newRight)

        document.querySelectorAll('.slide').forEach((slide)=> {
            slide.style.transform = `translateX(-570px)` // +30 for the gap
        })

        setTimeout(() => {addSlides('left'); animating = false}, speed-400)

    }

    if(move === 'right') {

        const newLeft = data.pop()
        data.unshift(newLeft)

        document.querySelectorAll('.slide').forEach((slide)=> {
            slide.style.transform = `translateX(570px)` // +30 for the gap
        })

        setTimeout(() => {addSlides('right'); animating = false}, speed-400)
    }
}

renderSlides()

const prevSlide = document.querySelector('.prev-slide-btn')
const nextSlide = document.querySelector('.next-slide-btn')

nextSlide.addEventListener('click', () => {
    !animating && renderSlides('right', 1200)
})

prevSlide.addEventListener('click', () => {
    !animating && renderSlides('left', 1200)
})