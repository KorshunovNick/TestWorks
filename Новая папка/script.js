const box = document.querySelector('.grid-box')

for (let i = 1 ; i < box.children.length+1 ; i++){
    box.children[i-1].innerHTML = 'Grid ' + i
}