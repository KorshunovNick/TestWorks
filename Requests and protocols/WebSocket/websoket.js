let log = (data)=>console.log(data)

let socket = new WebSocket('wss://google.com')

socket.onopen = ()=>{
    log('Соединение установлено')
    log('Отправляем данные на сервер')
    socket.send('Мы прекрасные данные')
}

socket.onmessage = (event)=>{
    log(`Нам прислали вот это: ${event.data}`)
}

socket.onclose = function(event){
    if (event.wasClean) {
      log(`Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае event.code 1006
      log(`Соединение прервано`);
    }
}

socket.onerror= (e)=>{
    log(`ОшибОЧКА : ${e}`)
}