function inputToSpan() {
    let inputs = document.querySelectorAll('[type="text"]')
    for (let input of inputs) {
        input.onchange = () => {

            let text = document.createElement('span')
            text.innerHTML = input.value
            text.id = input.id
            input.parentElement.replaceChild(text, input)


        }
    }
}
inputToSpan()

// img.onchange=(event)=>{
//     let fileReader = new FileReader()
//     try{
//     fileReader.readAsDataURL(event.target.files[0])


//     fileReader.onload = ()=>{
//         photo.src = fileReader.result
//     }

// } catch(err){
//     fileReader.abort()
// }

// }

img.onchange = function (e) {
    photo.src = URL.createObjectURL(e.target.files[0])
}


change.onclick = () => {
    let spans = document.querySelectorAll('span')
    for (let span of spans) {
        let inp = document.createElement('input')
        inp.id = span.id
        inp.type = 'text'
        span.parentElement.replaceChild(inp, span)
    }
    inputToSpan()
}
photo.onclick = function () { this.src = '#' } 