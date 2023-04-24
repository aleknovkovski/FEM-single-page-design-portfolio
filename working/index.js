const prevSlide = document.querySelector('.prev-slide-btn')
const nextSlide = document.querySelector('.next-slide-btn')
const slides = document.querySelectorAll('.slide')

prevSlide.addEventListener('click', () => {
    slides.forEach(slide => slide.style.transform = 'translateX(-560px)')
})

nextSlide.addEventListener('click', () => {
    slides.forEach(slide => slide.style.transform = 'translateX(560px)')
})