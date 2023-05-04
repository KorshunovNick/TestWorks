let box = document.querySelector('#sqr')

// let box2 = document.createElement('div');
// box2.id = 'box2'
// box2.className = 'sqr'
// document.querySelector('#parent').appendChild(box2);

delS.onclick = function(){
    sqrt.hidden = !sqrt.hidden
    if (sqrt.hidden){
        let clone = sqr.cloneNode(true)
        sqr.remove()
        sqrt.insertAdjacentElement('afterend',clone)
        transport(clone)
    } else {
        let clone = sqr.cloneNode(true)
        sqr.remove()
        sqrt.insertAdjacentElement('beforeend',clone)
        transport(clone)
    }
    

}
out.onclick = function(){
    if (out.checked){
    let clone = sqr.cloneNode(true)
    sqr.remove()
    sqrt.insertAdjacentElement('afterend',clone)
    transport(clone)
    } else {
        let clone = sqr.cloneNode(true)
        sqr.remove()
        sqrt.insertAdjacentElement('beforeend',clone)
        transport(clone)
    }
}
transport(box);
// transport(box2);

function transport(elem,global = false){
elem.onmousedown = function(e) { 

    // точки зажатия ЛКМ на элементе
    let pointX = e.offsetX
    let pointY = e.offsetY 
    

 

    // родитель
    let parent = (global) ? document.body : elem.parentElement
    parent.style.position = 'relative'
   
    
    
    elem.style.position = 'absolute'
    elem.style.cursor = 'grab'
    elem.style.zIndex = '2'

   

     // движение внутри родителя
    parent.onmousemove = function(e) {
        

        // координаты внутри родителя
        /* если сделать так:

        let left = e.offsetX - pointX 
        let top = e.offsetY - pointY

        то будет кошмар эпилептика, элемент стремится в левый верхний угол
        */
        let left = e.clientX - parent.offsetLeft - pointX 
        let top = e.clientY - parent.offsetTop - pointY

        elem.style.left = left +'px';
        elem.style.top = top+ 'px';
        
        // выходы из границ
        if (left + elem.clientWidth > parent.clientWidth ){

            elem.style.left = parent.clientWidth - elem.clientWidth - parent.clientLeft/2 +'px'
            
            
        }
        if (top + elem.clientHeight > parent.clientHeight ){

            elem.style.top = parent.clientHeight - elem.clientHeight - parent.clientTop/2+ 'px'

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
        parent.onmousemove = null;
        elem.onmouseup = null;
        elem.style.zIndex = '1'
        }
    

    // браузерное ограничение
    elem.ondragstart = ()=> { return false }
  }
  
}

