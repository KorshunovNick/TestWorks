window.onload = window.onunload = () => {
    (text.value)
        ? localStorage.setItem('blacknote', 'Черновик:')
        : localStorage.setItem('blacknote', '')
}

text.innerHTML = localStorage.getItem('blacknote') + ' ' + localStorage.getItem('textValue')

text.onkeydown = (e) => {
    if (e.key == 'Tab') {
        e.preventDefault()
        text.focus()
        text.value += ' '.repeat(4)
    }
}
text.oninput = () => {
    (text.value.startsWith('Черновик:'))
        ? localStorage.setItem('textValue', text.value.slice(10, text.value.length))
        : localStorage.setItem('textValue', text.value)
}

text.onfocus = () => {
    (text.value.startsWith('Черновик:'))
        ? text.value = text.value.slice(10, text.value.length)
        : ''
}

