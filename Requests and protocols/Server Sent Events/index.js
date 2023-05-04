let eventSource;

function start() { // когда нажата кнопка "Старт"
  if (!window.EventSource) {
    // Internet Explorer или устаревшие браузеры
    alert("Ваш браузер не поддерживает EventSource.");
    return;
  }

  eventSource = new EventSource(url);

  eventSource.onopen = function(e) {
    log("Событие: open");
  };

  eventSource.onerror = function(e) {
    log("Событие: error");
    if (this.readyState == EventSource.CONNECTING) {
      log(`Переподключение (readyState=${this.readyState})...`);
    } else {
      log("Произошла ошибка.");
    }
  };

  eventSource.addEventListener('bye', function(e) {
    log("Событие: bye, данные: " + e.data);
  });

  eventSource.onmessage = function(e) {
    log("Событие: message, данные: " + e.data);
  };
}

function stop() { // когда нажата кнопка "Стоп"
  eventSource.close();
  log("Соединение закрыто");
}

function log(msg) {
  logElem.innerHTML += msg + "<br>";
}