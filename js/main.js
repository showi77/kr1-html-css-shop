// ==========================================
// 1. База данных товаров
// ==========================================
const productsDatabase = {
  mouse: {
    title: 'Беспроводная мышь Pro Wireless',
    sku: 'PR-94021',
    badge: 'Хит продаж',
    rating: '★ 4.8 (34 отзыва)',
    price: '2 490 руб.',
    oldPrice: '3 100 руб.',
    discount: '-20%',
    image: 'images/mouse.webp',
    description:
      'Флагманская беспроводная мышь с оптическим сенсором нового поколения, эргономичной формой и бесшумными переключателями. Подходит для работы и игр.',
    advantages: [
      'Быстрая зарядка Type-C (до 70 часов работы)',
      'Подключение по 2.4 GHz радиоканалу и Bluetooth 5.2',
      'Официальная гарантия производителя 12 месяцев',
    ],
    specs: [
      { name: 'Тип подключения', value: 'Беспроводное (Bluetooth / 2.4 GHz)' },
      { name: 'Сенсор', value: 'PixArt PAW3395 (до 16 000 DPI)' },
      { name: 'Количество кнопок', value: '6 программируемых кнопок' },
      { name: 'Вес', value: '68 грамм' },
      { name: 'Аккумулятор', value: '500 мА·ч, зарядка через Type-C' },
    ],
  },
  keyboard: {
    title: 'Механическая клавиатура RGB Hot-Swap',
    sku: 'PR-88104',
    badge: 'Скидка -20%',
    rating: '★ 4.9 (52 отзыва)',
    price: '4 800 руб.',
    oldPrice: '6 000 руб.',
    discount: '-20%',
    image: 'images/keyboard.webp',
    description:
      'Компактная игровая механическая клавиатура с тихими красными переключателями, кастомизацией Hot-Swap и поклавишной RGB-подсветкой.',
    advantages: [
      'Линейные свитчи Red Switch с мягким ходом',
      'Прочные PBT кейкапы двойного литья',
      'Съемный плетеный кабель Type-C',
    ],
    specs: [
      { name: 'Форм-фактор', value: '75% (84 клавиши)' },
      { name: 'Тип свитчей', value: 'Механические Red Switch' },
      { name: 'Подсветка', value: 'RGB (18 режимов анимации)' },
      { name: 'Интерфейс', value: 'USB Type-C' },
      { name: 'Вес', value: '820 грамм' },
    ],
  },
  headphones: {
    title: 'Беспроводные наушники ANC SoundPro',
    sku: 'PR-55219',
    badge: 'Новинка',
    rating: '★ 4.7 (19 отзывов)',
    price: '5 990 руб.',
    oldPrice: '',
    discount: '',
    image: 'images/headphones.webp',
    description:
      'Полноразмерные наушники с активным гибридным шумоподавлением ANC, звуком высокой четкости Hi-Res и амбушюрами с эффектом памяти.',
    advantages: [
      'До 45 часов автономной работы',
      'Двойной микрофон с шумоподавлением для звонков',
      'Складная конструкция и защитный чехол в комплекте',
    ],
    specs: [
      { name: 'Тип наушников', value: 'Полноразмерные беспроводные' },
      { name: 'Динамики', value: '40 мм с титановой мембраной' },
      { name: 'Версия Bluetooth', value: '5.3 (кодеки AAC, SBC)' },
      { name: 'Шумоподавление', value: 'Активное (ANC до 38 дБ)' },
      { name: 'Вес', value: '240 грамм' },
    ],
  },
  webcam: {
    title: 'Веб-камера Ultra HD 2K Streamer',
    sku: 'PR-33108',
    badge: 'Выбор покупателей',
    rating: '★ 4.6 (28 отзывов)',
    price: '3 600 руб.',
    oldPrice: '',
    discount: '',
    image: 'images/veb-camera.webp',
    description:
      'Качественная камера для видеоконференций, онлайн-занятий и стримов с разрешением 2K QHD, автофокусом и шторкой приватности.',
    advantages: [
      'Четкая картинка 2K QHD при 30 fps',
      'Двойной микрофон с фильтрацией эха и шума',
      'Универсальное крепление на монитор или штатив',
    ],
    specs: [
      { name: 'Разрешение видео', value: '2560x1440 (2K QHD)' },
      { name: 'Угол обзора', value: '90 градусов' },
      { name: 'Фокусировка', value: 'Автоматическая (Smart Focus)' },
      { name: 'Интерфейс', value: 'USB 2.0 / USB 3.0 (Plug & Play)' },
      { name: 'Длина кабеля', value: '1.8 м' },
    ],
  },
  hub: {
    title: 'USB-C концентратор Hub 8-in-1',
    sku: 'PR-77402',
    badge: 'Скидка -15%',
    rating: '★ 4.9 (41 отзыв)',
    price: '2 890 руб.',
    oldPrice: '3 400 руб.',
    discount: '-15%',
    image: 'images/usb_hub.webp',
    description:
      'Металлический переходник для современных ноутбуков. Позволяет подключить монитор 4K, зарядку Power Delivery и аксессуары в один порт.',
    advantages: [
      'Сквозная зарядка Power Delivery до 100W',
      'Видеовыход HDMI 4K UHD 60Hz',
      'Алюминиевый корпус с эффективным охлаждением',
    ],
    specs: [
      { name: 'Входной порт', value: 'USB Type-C' },
      { name: 'Разъемы', value: 'HDMI 4K, 3x USB 3.0, PD 100W, SD, microSD, AUX' },
      { name: 'Скорость портов', value: 'До 5 Гбит/с' },
      { name: 'Совместимость', value: 'Windows, macOS, Linux, iPadOS' },
    ],
  },
  stand: {
    title: 'Алюминиевая подставка для ноутбука Pro',
    sku: 'PR-11094',
    badge: 'Хит',
    rating: '★ 5.0 (64 отзыва)',
    price: '1 950 руб.',
    oldPrice: '',
    discount: '',
    image: 'images/mouse.webp', // если есть файл images/stand.webp, укажите его
    description:
      'Складная регулируемая подставка из авиационного алюминия. Обеспечивает комфортную высоту экрана и естественное охлаждение ноутбука.',
    advantages: [
      '6 положений регулировки высоты и угла наклона',
      'Силиконовые защитные накладки против царапин',
      'Компактно складывается, чехол в комплекте',
    ],
    specs: [
      { name: 'Материал', value: 'Анодированный алюминий' },
      { name: 'Совместимость', value: 'Ноутбуки от 10 до 17.3 дюймов' },
      { name: 'Максимальная нагрузка', value: 'До 15 кг' },
      { name: 'Вес', value: '260 грамм' },
    ],
  },
};

// ==========================================
// 2. Запоминание клика по кнопке «Подробнее»
// ==========================================
function initDetailButtons() {
  const detailButtons = document.querySelectorAll('.product-detail-link');
  detailButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (id) {
        localStorage.setItem('selectedProductId', id);
      }
    });
  });
}

// ==========================================
// 3. Отображение данных на странице product.html
// ==========================================
function renderProductDetail() {
  const titleEl = document.getElementById('product-title');
  if (!titleEl) return; // Не выполняем код на других страницах

  try {
    // 1. Проверяем адресную строку (?id=...)
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    // 2. Если в строке пусто, берем из памяти браузера
    if (!productId) {
      productId = localStorage.getItem('selectedProductId');
    }

    // 3. По умолчанию — мышь
    if (!productId || !productsDatabase[productId]) {
      productId = 'mouse';
    }

    const product = productsDatabase[productId];
    if (!product) return;

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text || '';
    };

    // Заполнение текста
    setText('page-title', `${product.title} — Учебный интернет-магазин`);
    setText('product-breadcrumb', product.title);
    setText('product-title', product.title);
    setText('product-sku', `Артикул: ${product.sku}`);
    setText('product-rating', product.rating);
    setText('product-price', product.price);
    setText('product-description', product.description);

    // Заполнение картинок
    const mainImg =
      document.getElementById('product-image') ||
      document.querySelector('.product-gallery__main-img');

    if (mainImg && product.image) {
      mainImg.src = product.image;
      mainImg.alt = product.title;
    }

    const thumbImages = document.querySelectorAll('.product-gallery__thumb img');
    thumbImages.forEach((thumb) => {
      if (product.image) {
        thumb.src = product.image;
        thumb.alt = product.title;
      }
    });

    // Бейдж
    const badgeEl = document.getElementById('product-badge');
    if (badgeEl) {
      badgeEl.textContent = product.badge || '';
      badgeEl.hidden = !product.badge;
    }

    // Цены
    const oldPriceEl = document.getElementById('product-old-price');
    const discountEl = document.getElementById('product-discount');
    if (oldPriceEl && discountEl) {
      if (product.oldPrice) {
        oldPriceEl.textContent = product.oldPrice;
        oldPriceEl.hidden = false;
        discountEl.textContent = product.discount || '';
        discountEl.hidden = false;
      } else {
        oldPriceEl.hidden = true;
        discountEl.hidden = true;
      }
    }

    // Кнопка заказа
    const orderBtn = document.getElementById('product-order-button');
    if (orderBtn) {
      orderBtn.dataset.product = product.title;
    }

    // Преимущества
    const advantagesList = document.getElementById('product-advantages');
    if (advantagesList && Array.isArray(product.advantages)) {
      advantagesList.innerHTML = product.advantages
        .map((item) => `<li>✓ ${item}</li>`)
        .join('');
    }

    // Характеристики
    const specsTbody = document.getElementById('product-specs-tbody');
    if (specsTbody && Array.isArray(product.specs)) {
      specsTbody.innerHTML = product.specs
        .map(
          (spec) => `<tr><th>${spec.name}</th><td>${spec.value}</td></tr>`
        )
        .join('');
    }
  } catch (error) {
    console.error('Ошибка заполнения карточки товара:', error);
  }
}

// Запуск функций при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initDetailButtons();
    renderProductDetail();
  });
} else {
  initDetailButtons();
  renderProductDetail();
}

// ==========================================
// 4. Модальное окно оформления заявки
// ==========================================
const orderDialog = document.getElementById('order-dialog');
const orderButtons = document.querySelectorAll('.product-card__button');
const closeDialogButton = document.getElementById('close-order-dialog');
const selectedProductInput = document.getElementById('selected-product');
const orderForm = document.getElementById('order-form');
const successMessage = document.getElementById('success-message');

if (orderDialog) {
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const productName = button.dataset.product || 'Выбранный товар';
      if (selectedProductInput) {
        selectedProductInput.value = productName;
      }
      orderDialog.showModal();
    });
  });

  if (closeDialogButton) {
    closeDialogButton.addEventListener('click', () => {
      orderDialog.close();
    });
  }

  orderDialog.addEventListener('click', (event) => {
    const dialogDimensions = orderDialog.getBoundingClientRect();
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      orderDialog.close();
    }
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = Array.from(orderForm.elements);
    formElements.forEach((element) => {
      if (element.willValidate) {
        element.removeAttribute('aria-invalid');
      }
    });

    if (!orderForm.checkValidity()) {
      formElements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      orderForm.reportValidity();
      return;
    }

    if (successMessage) {
      successMessage.hidden = false;
    }

    orderForm.reset();
    if (orderDialog && orderDialog.open) {
      orderDialog.close();
    }
  });
}

// ==========================================
// 5. Фиксированная кнопка «Наверх»
// ==========================================
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('scroll-top--visible');
    } else {
      scrollTopBtn.classList.remove('scroll-top--visible');
    }
  });

  scrollTopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}