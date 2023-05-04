window.onresize=()=>{
let cols = document.getElementsByClassName('col-12')
for (let col of cols){
    col.innerHTML=`${col.clientWidth}`
}
}
