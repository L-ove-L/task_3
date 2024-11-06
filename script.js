const slider = document.querySelector(".slider")
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
const slides = document.querySelectorAll(".slider-image")
const bottom = document.querySelector(".bottom")

let currentSlideIndex = 0
const paginationCircles = []
let sliderWidth = slider.clientWidth

window.addEventListener("resise", () => {
    sliderWidth = slider.clientWidth
    // -----
})

function createPagination () {
    const div = document.createElement("div")
    div.classList.add("pagination-circle")
    bottom.appendChild(div)
    paginationCircles.push(div)
}
function addPagination () {
    slides.forEach(createPagination)
    paginationCircles[0].classList.add("activeSlider")
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlider(index))
    })
}
// addAciveSliderClass
// removeAciveSliderClass
// showSlide
// nextSlide
// prevSlide
function changeSlider(sliderIndex) {
    // 
}