document.addEventListener("DOMContentLoaded", function () {
  const LANG_PATH = "lang/",
    DEFAULT_LANG = "en",
    userLang = (navigator.language || DEFAULT_LANG).split('-')[0];

  const urlLang = new URLSearchParams(window.location.search).get("lang");
  const lang = urlLang || userLang;

  async function loadLanguageFile(language) {
    try {
      // Проверяем наличие файла перед загрузкой
      const response = await fetch(`${LANG_PATH}${language}.json`, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error(`Language file for '${language}' not found`);
      }

      // Если файл найден, загружаем его :)
      const dataResponse = await fetch(`${LANG_PATH}${language}.json`);
      const data = await dataResponse.json();
      applyTranslations(data, language);

    } catch (err) {
      console.error(`Error loading ${language} language file: ${err.message}`);
      // Если ошибка с языковым файлом, пробуем загрузить файл по умолчанию
      if (language !== DEFAULT_LANG) {
        await loadLanguageFile(DEFAULT_LANG);
      }
    }
  }

  // Функция для применения переводов на страницу
  function applyTranslations(data, language) {
    document.querySelectorAll("[data-lang]").forEach(el => {
      const key = el.dataset.lang;
      if (data[key]) el.innerHTML = data[key];
    });

    document.documentElement.lang = language;
    document.querySelector(".wrapper").classList.add(`lang_${language}`);
  }

  // Загружаем файл перевода на основе параметра языка
  loadLanguageFile(lang);

  // Устанавливаем класс webp
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    if (support) {
      document.querySelector('html').classList.add('webp');
    } else {
      document.querySelector('html').classList.add('no-webp');
    }
    initializeImageFormat();
  });

  function initializeImageFormat() {
    const assetPath = "img/arts/";
    const pixelRatio = Math.round(window.devicePixelRatio);  // Получаем плотность пикселей устройства

    const isWebPFormat = document.documentElement.classList.contains("webp");
    const imageExtension = isWebPFormat ? "webp" : "jpg";  // Выбираем расширение в зависимости от формата
    // Обрабатываем все карточки
    const cardItems = document.querySelectorAll(".bunner__cards .card");
    if (pixelRatio >= 2 && pixelRatio <= 3) {
      cardItems.forEach((item, index) => {
        const imageUrl = `${assetPath}${index + 1}-x${pixelRatio}.${imageExtension}`;
        item.style.backgroundImage = `url('${imageUrl}')`;
      });
    } else {
        cardItems.forEach((item, index) => {
        const imageUrl = `${assetPath}${index + 1}-x3.${imageExtension}`;
        item.style.backgroundImage = `url('${imageUrl}')`;
      });
    }
  }

  function handleSelectorClicks() {
    const selectorElements = document.querySelectorAll(".bunner__selector .item");
    // Обработчик кликов для переключения активных элементов
    selectorElements.forEach((element) => {
      element.addEventListener("click", () => {
        selectorElements.forEach((el) => el.classList.remove("--active"));
        element.classList.add("--active");
      });
    });
  }

  function configureContinueButton() {
    const continueBtn = document.querySelector(".btn-continue");
    // Обработчик клика по кнопке
    continueBtn.addEventListener("click", () => {
      const activeItem = document.querySelector(".bunner__selector .item.--active");
      if (activeItem) {
        const link = activeItem.getAttribute("data-link");
        if (link) {
          window.open(link, "_blank");
        }
      }
    });
  }
  // Инициализация
  initializeImageFormat();
  handleSelectorClicks();
  configureContinueButton();
});