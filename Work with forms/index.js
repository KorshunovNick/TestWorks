function showModal(html) {
    let modal = document.createElement('form')
    modal.className = 'modal'

    let text = document.createElement('div')
    text.innerHTML = html
    modal.appendChild(text)


    let input = document.createElement('input')
    input.type = 'text'
    input.style.display = 'block'
    modal.appendChild(input)

    let buttonOk = document.createElement('button')
    buttonOk.value = 'Ok'
    buttonOk.innerHTML = 'Ok'
    modal.appendChild(buttonOk)

    let cancel = document.createElement('button')
    cancel.value = 'cancel'
    cancel.innerHTML = 'cancel'
    modal.appendChild(cancel)
    document.body.appendChild(modal)


    modal.elements[0].focus()

    buttonOk.onclick = () => alert(input.value)


    cancel.onclick = () => alert(null)
}


document.querySelector('#start').insertAdjacentText('afterBegin','Helooo')
