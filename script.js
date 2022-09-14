import generateServiceCard from './utils/serviceCard.js'
import generateCarCard from './utils/carCard.js'

generateServiceCard()
generateCarCard()


const mobNav = document.querySelector('.mob-nav-container')
const navBars = document.querySelector('.nav-bars')
const navBtns = document.querySelector('.nav-btns')
const close = document.createElement('a')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

close.setAttribute('class', 'close text-decoration-none')
close.innerHTML = 'X'

navBars.addEventListener('click', () => {
    navBtns.appendChild(close)
    mobNav.appendChild(navBtns)
})

close.addEventListener('click', () => {
    mobNav.removeChild(navBtns)
})
