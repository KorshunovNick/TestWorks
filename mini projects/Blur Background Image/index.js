const bgImageEl = document.querySelector('#bg-image')

window.addEventListener("scroll",()=>{
    updateImage()
})

function updateImage(){
    bgImageEl.style.opacity = 1.2 - window.pageYOffset / 1000
}

let buttonUp = document.createElement('button')

buttonUp.innerHTML = 'Up'
buttonUp.id = 'buttonUp'
buttonUp.style.cssText = `
    background-color: red;
    opacity: 0.7;
    position: fixed;
    left: ${document.documentElement.clientWidth - 40}px;
    bottom: 20px;
    color: white;
`
document.body.append(buttonUp)
let startHeight = document.documentElement.clientHeight


document.addEventListener('scroll',()=>{
    let scrollT = document.documentElement.scrollTop
    if (scrollT > startHeight){
        buttonUp.hidden = false
    } else {
        buttonUp.hidden = true
    }
    console.log(scrollT)
})