
const text = document.querySelector('.text')


document.querySelector('.form').oninput = ()=>{
text.innerHTML = ''
text.style.backgroundImage =`url(${URL.createObjectURL(img.files[0])}`; 

text.style.lineHeight = document.querySelector('#number').value + 'px';

document.body.style.background = document.querySelector('#color').value;

let count = +document.querySelector('#count').value;

let symbol = document.querySelector('#symbol').value;

while(count>0){
    if (count%100==0){
        text.append('<br>')
    }
    text.append(symbol)
    count--
}
;

}