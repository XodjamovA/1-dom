let btn = document.querySelector('.one')
let btn1 = document.querySelector('.two')
let btn2 = document.querySelector('.three')
let btn3 = document.querySelector('.four')
let h1 = document.querySelector('h1')



btn.onclick = () => {
    h1.innerText--
    if (h1.innerText <= -10) h1.innerText = -10
}
btn1.onclick = () => { h1.innerText = 0 }
btn2.onclick = () => {
    h1.innerText++
    if (h1.innerText >= 10) h1.innerText = 10
}
btn3.onclick = () => { h1.innerText = Math.round(Math.random() * 10) }




