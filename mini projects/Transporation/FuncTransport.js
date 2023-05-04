let box = document.querySelector('#sqr')

// let box2 = document.createElement('div');
// box2.id = 'box2'
// box2.className = 'sqr'
// document.querySelector('#parent').appendChild(box2);


transport(box);
// transport(box2);

function transport(elem){
elem.onmousedown = function(e) {
    
    elem.style.position = 'absolute'  

    // точки зажатия ЛКМ на элементе
    let shiftX = e.clientX - elem.getBoundingClientRect().left
    let shiftY = e.clientY - elem.getBoundingClientRect().top


    // родитель
    let parent = elem.parentElement
    parent.style.position = 'relative'
    
    // движение внутри родителя
    parent.onmousemove = function(e) {

        // координаты внутри родителя
        let left = e.clientX - shiftX 
        let top = e.clientY - shiftY

        elem.style.left = left + 'px'
        elem.style.top = top + 'px'
        
        // выходы из границ
        if (left + elem.offsetWidth > parent.clientWidth ){
            elem.style.left = parent.clientWidth - elem.offsetWidth +'px'
        }
        if (top + elem.offsetHeight > parent.clientHeight ){
            elem.style.top = parent.clientHeight - elem.offsetHeight + 'px'
        }
        if (left  < 0){
            elem.style.left = 0
        }
        if (top < 0){
            elem.style.top = 0
        }

        
    }
    // сброс при отпускании ЛКМ
    parent.onmouseleave = elem.onmouseup = function() {
        elem.onmouseup = null
        parent.onmousemove = null;
    }
    // браузерное ограничение
    elem.ondragstart = ()=> { return false }
  }
}
transport(box)