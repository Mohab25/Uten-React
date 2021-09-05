let sizes = document.querySelectorAll('.size')
let colors = document.querySelectorAll('.color')
let shoes = document.querySelectorAll('.shoe')
let gradients = document.querySelectorAll('.gradient')
let prevColor= 'red' // getting the previous color for gradient animation to be pleasent
let shoeBg = document.getElementsByClassName('shoeBackground')[0]; 


sizes.forEach(size=>size.addEventListener('click',()=>{
    sizes.forEach(si=>{si.classList.remove('active')});
    size.classList.add('active')
}))

colors.forEach(c=>c.addEventListener('click',()=>{
    colors.forEach(col=>col.classList.remove('active'));
    c.classList.add('active');
    let primaryColor = c.getAttribute('primary');
    let shoeColor = c.getAttribute('color');
    
    let shoe = document.querySelector(`.shoe[color=${shoeColor}]`)
    shoes.forEach(s=>s.classList.remove('show'))
    shoe.classList.add('show')
    
    let gradient = document.querySelector(`.gradient[color=${color=shoeColor}]`)
    let prevGradient = document.querySelector(`.gradient[color=${color=prevColor}]`)
    gradients.forEach(g=>g.classList.remove('first','second'))
    gradient.classList.add('first')
    prevGradient.classList.add('second')
    prevColor = shoeColor; 
    document.documentElement.style.setProperty('--primary',primaryColor)
}))

let x = window.matchMedia('(max-width:1000px)')

let setHeight=()=>{ 
    if(x.matches){
        let height = shoes[0].offsetHeight;
        shoeBg.style.height = `${height}px`
    }
    else{
        shoeBg.style.height = '470px';
    }
}
setHeight()

window.addEventListener('resize',setHeight)