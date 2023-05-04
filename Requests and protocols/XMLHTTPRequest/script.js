let req = new XMLHttpRequest() // создание XMLHttpRequest

let url = 'https://jsonplaceholder.typicode.com/todos/1'

function readyState() {    // отслеживание состояний
    console.log(this.readyState)
    return
}
readyState = readyState.bind(req)  // не забыл и про bind

req.open('GET', url) // инициализация 

req.responseType = 'json' // набодобие response.json() у fetch

let start = Date.now() // засекли время
req.send() // отправка запроса

req.onprogress = () => {  // событие происходит периодически во время загрузки ответа
    readyState()

    if (Date.now() - start > 360) { // если больше 360 м/с - прерываем запрос
        req.abort() // также можно перед отправкой send указать 
        // req.Timeout - время в м/с которое мы готовы ждать ответ
        console.log('AbortTime req: ' + (Date.now() - start) + ' ms')
    }
}


req.onload = () => {   // ответ пришел

    console.log('Ответ пришел')
    console.log('Time req: ' + (Date.now() - start) + ' ms')
    console.log(`
    Статус : ${req.status}
    Текст статуса : ${req.statusText}`)   // после получения ответа можем узнать его код
    // onload создастся даже если страница не обнаружена (404) 
    let res = req.response
    console.log(res.title)
    readyState()
}

// если что-то отправляем то пользуемся спец. объектом upload
req.upload.onprogress = (event) => {
    console.log(`Отправлено ${event.loaded} из ${event.total} байт`)
}