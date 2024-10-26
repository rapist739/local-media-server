const series = [ // Массив объектов сериалов
    { title: "Сериал 1", file: "videos/PT1.mp4" }, // Замените на имя вашего файла
    { title: "Сериал 2", file: "videos/PT2.mp4" } // Замените на имя вашего файла
  ];
  
  // Функция для отображения списка сериалов
  function displaySeries() {
    const seriesListContainer = document.getElementById('series-list'); // Получаем контейнер для списка сериалов
    series.forEach(seriesItem => { // Проходим по каждому объекту в массиве
      const div = document.createElement('div'); // Создаем элемент div для каждого сериала
      div.className = 'series-item'; // Добавляем класс для стилизации
      div.textContent = seriesItem.title; // Устанавливаем текст элемента
      div.onclick = () => openPlayer(seriesItem); // Добавляем обработчик клика
      seriesListContainer.appendChild(div); // Добавляем созданный элемент в контейнер
    });
  }
  
  // Функция для открытия видеоплеера
  function openPlayer(seriesItem) {
    document.getElementById('selected-title').textContent = seriesItem.title; // Устанавливаем заголовок плеера
    document.getElementById('video-source').src = seriesItem.file; // Устанавливаем источник видео
    document.getElementById('video-player').load(); // Загружаем видео в плеере
    document.getElementById('player-container').style.display = 'block'; // Показываем плеер
  }
  
  // Функция для закрытия плеера
  function closePlayer() {
    document.getElementById('player-container').style.display = 'none'; // Скрываем плеер
    document.getElementById('video-player').pause(); // Останавливаем воспроизведение видео
  }
  
  // Вызов функции для отображения сериалов при загрузке страницы
  window.onload = displaySeries; // Функция запускается при загрузке страницы