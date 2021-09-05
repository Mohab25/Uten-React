let card = document.querySelector('.card')
let btn = document.querySelector('#card-btn')

btn.addEventListener('click',()=>{
    card.classList.toggle('active')
})