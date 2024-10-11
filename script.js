let searchIcon = document.querySelector('.search-icon')
let cartIcon = document.querySelector('.cart-icon')
let hide = document.querySelector('.hide')
let search = document.querySelector('.input')
let cartsec = document.querySelector('.cart')
let ramp = document.querySelector('.slider')
let slides = document.querySelector('.slide')
let img = document.querySelector('.images-control')

let play=true;
searchIcon.addEventListener('click' , () => {
search.classList.remove('hide')
})
cartIcon.addEventListener('click' , () => {
cartsec.classList.remove('hide')
count++;
})

let i = 0,j = 1,intervalId;

const intervalFn = () => {
  intervalId = setInterval(() => {
    ramp.style.rotate = `${++i * 90}deg`
  },2000)

 
}

intervalFn()
